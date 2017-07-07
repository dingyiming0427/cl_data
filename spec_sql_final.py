# import pymysql
import numpy as np
import matplotlib.pyplot as plt
from matplotlib import cm

##### function Connect DB, fetch 
def connect():
    return pymysql.connect(host = "rm-j6cluj4576jdi6n6oo.mysql.rds.aliyuncs.com",
                           database = 'rnd_test', 
                           user='cognitiveleap', 
                           password= 'QWE@123456'
                          )

def fetch(CaseID):
    db = connect()
    cur = db.cursor()
    sql = """SELECT Ax, Ay, Az, SensorId, CasdId 
             FROM sensordataoutput 
             WHERE CasdId=%s
             ORDER BY SensorId,TimeLog""" %(str(CaseID))
    cur.execute(sql)
    results = cur.fetchall()
    db.close()
    results = np.asarray(results)
    return results


##### function Detrend with mean_subtraction 
def subtract_mean(winsize, sig):
    fs = 20
    winsize = 5
    # one sided window of length fs * x seconds / 2
    win = fs * winsize / 2 
    newsig = []
    
    # loop on each datapoint in signal
    for i in range(len(sig)): 
            count = 0 
            sum = 0
            for j in range(int(i-win), int(i+win+1)): 
                if j >= 0 and j < len(sig): 
                    count += 1
                    sum += sig[j]
            newsig.append(sig[i]- sum/count)         
    return newsig

##### function Split Hand and Leg, collapse xyz 
def handleg(CaseID):
    r = fetch(CaseID) 
    hend = np.where(r[:,3] == 1) #separate hand / leg
    hend = hend[0][-1] #get index for end of hand sensor

    # per axis per sensor, sub mean, return hand + leg signals
    nSens = 2  #hand and leg
    nAxes = 3  #xyz signals
    winsize = 5 # 5 sec win for mean sub detrending
    
    # transpose data
    hdata = r.T[:int(nAxes),:hend] 
    ldata = r.T[:int(nAxes),hend:]

    # Detrend Hand
    newh = np.empty(hdata.shape)
    for i in range(nAxes):
        sig = hdata[i,:]
        newsig = subtract_mean(winsize,sig) #call sub_mean func
        newh[i,:] = newsig
        
    # Detrend Leg
    newl = np.empty(ldata.shape)
    for i in range(nAxes):
        sig = ldata[i,:]
        newsig = subtract_mean(winsize,sig) #call sub_mean func
        newl[i,:] = newsig
        
    # root sum of squares xyz signals into vector 
    hand_sig = np.sqrt(np.sum(newh**2, axis=0)) # sqrt sum of sqrs, 3 x N array
    leg_sig = np.sqrt(np.sum(newl**2, axis=0)) # sqrt sum of sqrs, 3 x N array
    
    return hand_sig, leg_sig

##### function Get Freq Power Time Series array
def get_freaky(CaseID, SensorID): 
    [hand_sig, leg_sig]=handleg(CaseID) #call handleg func
    
    if SensorID == 1:
        X = hand_sig
    elif SensorID == 2:
        X = leg_sig
    else:
        print('Incorrect SensorID')
        
    fs = 20 # Post-interpolation sample rate
    winsize = 4 # 4 second sliding fft window
    nfft = fs*winsize # segment length
    win = np.hamming(nfft) # make hamming window len(nfft)
    [spectrum, freqs, t, im] = plt.specgram(np.asarray(X.T), 
                                            NFFT = nfft, 
                                            Fs = fs,
                                            window = win,
                                            noverlap = nfft/2, 
                                            detrend = 'none',
                                            cmap = cm.PuBuGn
                                           )
    return spectrum, freqs, t, im


##### function Get Motion Freq Variability vector
def get_mfv(CaseID,SensorID):

    [spectrum, freqs, t, im] = get_freaky(CaseID, SensorID)

    # specify number of freqs in each band. 1 = 1hz intervals
    # count the number of freqs in specified band interval = numfreqs divided by highest frequency (10) (= number of intervals between 0 and 1 Hz) 
    # log the spectrum array to give dB/Hz
    
    #1 Hz interval bands
    bandint = 1 
    bincount = bandint * (len(freqs)//freqs[-1]) 
    S = spectrum[:int(len(freqs) - (len(freqs)%freqs[-1])), :] 
    log_spec = np.log(spectrum)

    mfv = np.zeros(int(freqs[-1]/bandint) + 1)
    mfvFreq = np.zeros(int(len(mfv)))

    counter = 0
    for i in range(0, int(len(S)), int(bincount)): # range 0 to len(freq), step n_bins 
        bandfreq = np.mean(S[i:i+bandint, :], axis=0) # mean the 
        mfv[counter] = np.std(np.log(bandfreq))
        mfvFreq[counter] = freqs[int((counter+1) * bincount)]
        counter += 1

    return mfv, mfvFreq, log_spec, spectrum, freqs, t

##### function Run all, return, insert to DB table
def insert(CaseID, SensorID):
    [mfv, mfvFreq, log_spec, spectrum, freqs, t] = get_mfv(CaseID, SensorID)
    
    db = connect()
    cursor = db.cursor()
    
    for i in range(log_spec.shape[0]): #len Freqs
        for j in range(log_spec.shape[1]): #len time 

            sql = """INSERT INTO motion_freq (freq_ind, f_time_ind, log_spec_value, freq_axis_tic, f_time_axis_tic, CaseId, SensorId) VALUES (%s, %s, %s, %s, %s, %s, %s)""" % (i, j, log_spec[i,j], freqs[i], t[j], CaseID, SensorID)
        
            cursor.execute(sql)
            db.commit()
            
    db.close()

    # return mfv, mfvFreq, log_spec, spectrum, freqs, t


##### MAIN
def main_spec(CaseIDs, SensorIDs):
    
    CaseIDs = [int(x) for x in CaseIDs]
    SensorIDs = [int(x) for x in SensorIDs]
    
    for i in (CaseIDs):
        for j in (SensorIDs):
            [mfv, mfvFreq, log_spec, spectrum, freqs, t] = insert(i,j)
        

##### Call Example
# CaseIDs = [13,14]
# SensorIDs = [1,2] # hand+leg
# main_spec(CaseIDs,SensorIDs)
# kill -9 PID