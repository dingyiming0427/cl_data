import React from 'react';
import { connect } from 'dva';
import { LineChart, Line, XAxis, YAxis, ReferenceLine, CartesianGrid, Tooltip, Legend } from 'recharts';
import ReactTooltip from 'react-tooltip'

const {PropTypes} = React;

//Data ripped from the database (omission errors)
const data = [
{xCoord:  0.0 , ADHD:  0.0241536959863 , Healthy:  0.0439667237541 , PADHD: 0.3546 },
{xCoord:  0.13 , ADHD:  0.0249164447669 , Healthy:  0.0459118311999 , PADHD: 0.3518 },
{xCoord:  0.27 , ADHD:  0.0256906429938 , Healthy:  0.0478873627251 , PADHD: 0.3492 },
{xCoord:  0.4 , ADHD:  0.026475873304 , Healthy:  0.0498899443849 , PADHD: 0.3467 },
{xCoord:  0.54 , ADHD:  0.0272716889523 , Healthy:  0.0519159630096 , PADHD: 0.3444 },
{xCoord:  0.67 , ADHD:  0.0280776138061 , Healthy:  0.0539615733173 , PADHD: 0.3422 },
{xCoord:  0.81 , ADHD:  0.0288931424116 , Healthy:  0.0560227066929 , PADHD: 0.3403 },
{xCoord:  0.94 , ADHD:  0.0297177401367 , Healthy:  0.0580950816388 , PADHD: 0.3384 },
{xCoord:  1.08 , ADHD:  0.0305508433898 , Healthy:  0.0601742158893 , PADHD: 0.3367 },
{xCoord:  1.21 , ADHD:  0.0313918599174 , Healthy:  0.0622554401663 , PADHD: 0.3352 },
{xCoord:  1.35 , ADHD:  0.0322401691818 , Healthy:  0.0643339135384 , PADHD: 0.3338 },
{xCoord:  1.48 , ADHD:  0.0330951228194 , Healthy:  0.0664046403343 , PADHD: 0.3326 },
{xCoord:  1.62 , ADHD:  0.0339560451811 , Healthy:  0.0684624885424 , PADHD: 0.3315 },
{xCoord:  1.75 , ADHD:  0.0348222339548 , Healthy:  0.0705022096169 , PADHD: 0.3306 },
{xCoord:  1.89 , ADHD:  0.0356929608711 , Healthy:  0.0725184595954 , PADHD: 0.3298 },
{xCoord:  2.02 , ADHD:  0.0365674724912 , Healthy:  0.0745058214206 , PADHD: 0.3292 },
{xCoord:  2.16 , ADHD:  0.0374449910781 , Healthy:  0.0764588283419 , PADHD: 0.3287 },
{xCoord:  2.29 , ADHD:  0.038324715549 , Healthy:  0.0783719882656 , PADHD: 0.3284 },
{xCoord:  2.43 , ADHD:  0.0392058225092 , Healthy:  0.0802398089053 , PADHD: 0.3282 },
{xCoord:  2.56 , ADHD:  0.0400874673665 , Healthy:  0.0820568235782 , PADHD: 0.3282 },
{xCoord:  2.7 , ADHD:  0.0409687855235 , Healthy:  0.0838176174805 , PADHD: 0.3283 },
{xCoord:  2.83 , ADHD:  0.0418488936468 , Healthy:  0.0855168542691 , PADHD: 0.3286 },
{xCoord:  2.97 , ADHD:  0.0427268910116 , Healthy:  0.0871493027691 , PADHD: 0.329 },
{xCoord:  3.1 , ADHD:  0.0436018609181 , Healthy:  0.0887098636219 , PADHD: 0.3295 },
{xCoord:  3.24 , ADHD:  0.0444728721777 , Healthy:  0.0901935956858 , PADHD: 0.3302 },
{xCoord:  3.37 , ADHD:  0.0453389806664 , Healthy:  0.0915957419993 , PADHD: 0.3311 },
{xCoord:  3.51 , ADHD:  0.0461992309413 , Healthy:  0.0929117551154 , PADHD: 0.3321 },
{xCoord:  3.64 , ADHD:  0.0470526579174 , Healthy:  0.0941373216209 , PADHD: 0.3333 },
{xCoord:  3.78 , ADHD:  0.0478982886 , Healthy:  0.0952683856547 , PADHD: 0.3346 },
{xCoord:  3.91 , ADHD:  0.0487351438699 , Healthy:  0.0963011712457 , PADHD: 0.336 },
{xCoord:  4.05 , ADHD:  0.0495622403159 , Healthy:  0.0972322033 , PADHD: 0.3376 },
{xCoord:  4.18 , ADHD:  0.0503785921103 , Healthy:  0.098058327072 , PADHD: 0.3394 },
{xCoord:  4.32 , ADHD:  0.0511832129231 , Healthy:  0.0987767259688 , PADHD: 0.3413 },
{xCoord:  4.45 , ADHD:  0.0519751178688 , Healthy:  0.0993849375461 , PADHD: 0.3434 },
{xCoord:  4.59 , ADHD:  0.0527533254819 , Healthy:  0.0998808675688 , PADHD: 0.3456 },
{xCoord:  4.72 , ADHD:  0.0535168597147 , Healthy:  0.100262802025 , PADHD: 0.348 },
{xCoord:  4.86 , ADHD:  0.0542647519516 , Healthy:  0.100529416993 , PADHD: 0.3506 },
{xCoord:  4.99 , ADHD:  0.0549960430358 , Healthy:  0.10067978629 , PADHD: 0.3533 },
{xCoord:  5.13 , ADHD:  0.0557097853001 , Healthy:  0.10071338683 , PADHD: 0.3561 },
{xCoord:  5.26 , ADHD:  0.0564050445979 , Healthy:  0.100630101656 , PADHD: 0.3592 },
{xCoord:  5.4 , ADHD:  0.0570809023277 , Healthy:  0.10043022062 , PADHD: 0.3624 },
{xCoord:  5.53 , ADHD:  0.0577364574444 , Healthy:  0.100114438699 , PADHD: 0.3658 },
{xCoord:  5.67 , ADHD:  0.0583708284523 , Healthy:  0.0996838519723 , PADHD: 0.3693 },
{xCoord:  5.8 , ADHD:  0.0589831553724 , Healthy:  0.0991399512809 , PADHD: 0.373 },
{xCoord:  5.94 , ADHD:  0.0595726016798 , Healthy:  0.0984846136296 , PADHD: 0.3769 },
{xCoord:  6.07 , ADHD:  0.0601383562027 , Healthy:  0.0977200913947 , PADHD: 0.381 },
{xCoord:  6.21 , ADHD:  0.0606796349791 , Healthy:  0.0968489994276 , PADHD: 0.3852 },
{xCoord:  6.34 , ADHD:  0.0611956830641 , Healthy:  0.0958743001569 , PADHD: 0.3896 },
{xCoord:  6.48 , ADHD:  0.0616857762818 , Healthy:  0.0947992868069 , PADHD: 0.3942 },
{xCoord:  6.61 , ADHD:  0.0621492229175 , Healthy:  0.0936275648668 , PADHD: 0.399 },
{xCoord:  6.75 , ADHD:  0.0625853653431 , Healthy:  0.0923630319557 , PADHD: 0.4039 },
{xCoord:  6.88 , ADHD:  0.062993581571 , Healthy:  0.0910098562409 , PADHD: 0.409 },
{xCoord:  7.02 , ADHD:  0.0633732867318 , Healthy:  0.089572453576 , PADHD: 0.4144 },
{xCoord:  7.15 , ADHD:  0.0637239344701 , Healthy:  0.0880554635356 , PADHD: 0.4198 },
{xCoord:  7.29 , ADHD:  0.0640450182541 , Healthy:  0.086463724526 , PADHD: 0.4255 },
{xCoord:  7.42 , ADHD:  0.0643360725948 , Healthy:  0.0848022481606 , PADHD: 0.4314 },
{xCoord:  7.56 , ADHD:  0.0645966741705 , Healthy:  0.0830761930874 , PADHD: 0.4374 },
{xCoord:  7.69 , ADHD:  0.0648264428526 , Healthy:  0.08129083846 , PADHD: 0.4437 },
{xCoord:  7.83 , ADHD:  0.0650250426297 , Healthy:  0.0794515572412 , PADHD: 0.4501 },
{xCoord:  7.96 , ADHD:  0.065192182426 , Healthy:  0.0775637895268 , PADHD: 0.4567 },
{xCoord:  8.1 , ADHD:  0.0653276168128 , Healthy:  0.0756330160725 , PADHD: 0.4634 },
{xCoord:  8.23 , ADHD:  0.0654311466085 , Healthy:  0.0736647322013 , PADHD: 0.4704 },
{xCoord:  8.37 , ADHD:  0.065502619367 , Healthy:  0.0716644222621 , PADHD: 0.4775 },
{xCoord:  8.5 , ADHD:  0.0655419297517 , Healthy:  0.069637534801 , PADHD: 0.4849 },
{xCoord:  8.64 , ADHD:  0.0655490197943 , Healthy:  0.0675894585976 , PADHD: 0.4923 },
{xCoord:  8.77 , ADHD:  0.0655238790372 , Healthy:  0.0655254997061 , PADHD: 0.5 },
{xCoord:  8.91 , ADHD:  0.065466544559 , Healthy:  0.0634508596322 , PADHD: 0.5078 },
{xCoord:  9.04 , ADHD:  0.0653771008837 , Healthy:  0.0613706147602 , PADHD: 0.5158 },
{xCoord:  9.18 , ADHD:  0.0652556797729 , Healthy:  0.0592896971343 , PADHD: 0.524 },
{xCoord:  9.31 , ADHD:  0.0651024599022 , Healthy:  0.0572128766817 , PADHD: 0.5323 },
{xCoord:  9.45 , ADHD:  0.0649176664233 , Healthy:  0.0551447449531 , PADHD: 0.5407 },
{xCoord:  9.58 , ADHD:  0.0647015704127 , Healthy:  0.0530897004396 , PADHD: 0.5493 },
{xCoord:  9.72 , ADHD:  0.0644544882088 , Healthy:  0.0510519355116 , PADHD: 0.558 },
{xCoord:  9.85 , ADHD:  0.0641767806404 , Healthy:  0.0490354250092 , PADHD: 0.5669 },
{xCoord:  9.99 , ADHD:  0.0638688521487 , Healthy:  0.0470439165028 , PADHD: 0.5758 },
{xCoord:  10.12 , ADHD:  0.0635311498058 , Healthy:  0.0450809222234 , PADHD: 0.5849 },
{xCoord:  10.26 , ADHD:  0.063164162233 , Healthy:  0.0431497126542 , PADHD: 0.5941 },
{xCoord:  10.39 , ADHD:  0.0627684184233 , Healthy:  0.041253311758 , PADHD: 0.6034 },
{xCoord:  10.53 , ADHD:  0.0623444864703 , Healthy:  0.0393944938059 , PADHD: 0.6128 },
{xCoord:  10.66 , ADHD:  0.0618929722106 , Healthy:  0.0375757817595 , PADHD: 0.6222 },
{xCoord:  10.8 , ADHD:  0.0614145177805 , Healthy:  0.0357994471497 , PADHD: 0.6317 },
{xCoord:  10.93 , ADHD:  0.0609098000962 , Healthy:  0.0340675113855 , PADHD: 0.6413 },
{xCoord:  11.07 , ADHD:  0.0603795292581 , Healthy:  0.032381748418 , PADHD: 0.6509 },
{xCoord:  11.2 , ADHD:  0.0598244468881 , Healthy:  0.0307436886778 , PADHD: 0.6605 },
{xCoord:  11.34 , ADHD:  0.059245324403 , Healthy:  0.0291546241959 , PADHD: 0.6702 },
{xCoord:  11.47 , ADHD:  0.0586429612306 , Healthy:  0.0276156148176 , PADHD: 0.6799 },
{xCoord:  11.61 , ADHD:  0.0580181829744 , Healthy:  0.0261274954093 , PADHD: 0.6895 },
{xCoord:  11.74 , ADHD:  0.0573718395323 , Healthy:  0.0246908839598 , PADHD: 0.6991 },
{xCoord:  11.88 , ADHD:  0.0567048031754 , Healthy:  0.0233061904731 , PADHD: 0.7087 },
{xCoord:  12.01 , ADHD:  0.0560179665931 , Healthy:  0.0219736265508 , PADHD: 0.7183 },
{xCoord:  12.15 , ADHD:  0.0553122409105 , Healthy:  0.0206932155603 , PADHD: 0.7277 },
{xCoord:  12.28 , ADHD:  0.0545885536846 , Healthy:  0.0194648032883 , PADHD: 0.7372 },
{xCoord:  12.42 , ADHD:  0.0538478468846 , Healthy:  0.0182880689786 , PADHD: 0.7465 },
{xCoord:  12.55 , ADHD:  0.0530910748634 , Healthy:  0.0171625366589 , PADHD: 0.7557 },
{xCoord:  12.69 , ADHD:  0.0523192023257 , Healthy:  0.0160875866619 , PADHD: 0.7648 },
{xCoord:  12.82 , ADHD:  0.0515332022987 , Healthy:  0.0150624672511 , PADHD: 0.7738 },
{xCoord:  12.96 , ADHD:  0.0507340541119 , Healthy:  0.0140863062675 , PADHD: 0.7827 },
{xCoord:  13.09 , ADHD:  0.049922741391 , Healthy:  0.0131581227164 , PADHD: 0.7914 },
{xCoord:  13.23 , ADHD:  0.0491002500722 , Healthy:  0.012276838221 , PADHD: 0.8 },
{xCoord:  13.36 , ADHD:  0.0482675664422 , Healthy:  0.0114412882733 , PADHD: 0.8084 },
{xCoord:  13.5 , ADHD:  0.0474256752086 , Healthy:  0.0106502332212 , PADHD: 0.8166 },
{xCoord:  13.63 , ADHD:  0.0465755576071 , Healthy:  0.00990236893443 , PADHD: 0.8247 },
{xCoord:  13.77 , ADHD:  0.0457181895493 , Healthy:  0.00919633710041 , PADHD: 0.8325 },
{xCoord:  13.9 , ADHD:  0.0448545398165 , Healthy:  0.00853073510615 , PADHD: 0.8402 },
{xCoord:  14.04 , ADHD:  0.0439855683032 , Healthy:  0.00790412546865 , PADHD: 0.8477 },
{xCoord:  14.17 , ADHD:  0.0431122243155 , Healthy:  0.00731504478327 , PADHD: 0.8549 },
{xCoord:  14.31 , ADHD:  0.0422354449275 , Healthy:  0.00676201216456 , PADHD: 0.862 },
{xCoord:  14.44 , ADHD:  0.0413561533997 , Healthy:  0.00624353716041 , PADHD: 0.8688 },
{xCoord:  14.58 , ADHD:  0.0404752576634 , Healthy:  0.00575812712586 , PADHD: 0.8755 },
{xCoord:  14.71 , ADHD:  0.0395936488724 , Healthy:  0.00530429404785 , PADHD: 0.8819 },
{xCoord:  14.85 , ADHD:  0.038712200027 , Healthy:  0.00488056081752 , PADHD: 0.888 },
{xCoord:  14.98 , ADHD:  0.0378317646715 , Healthy:  0.00448546695103 , PADHD: 0.894 },
{xCoord:  15.12 , ADHD:  0.0369531756673 , Healthy:  0.00411757376405 , PADHD: 0.8997 },
{xCoord:  15.25 , ADHD:  0.0360772440445 , Healthy:  0.00377546900913 , PADHD: 0.9053 },
{xCoord:  15.39 , ADHD:  0.0352047579324 , Healthy:  0.00345777098834 , PADHD: 0.9106 },
{xCoord:  15.52 , ADHD:  0.0343364815709 , Healthy:  0.00316313215685 , PADHD: 0.9156 },
{xCoord:  15.66 , ADHD:  0.0334731544034 , Healthy:  0.0028902422357 , PADHD: 0.9205 },
{xCoord:  15.79 , ADHD:  0.0326154902528 , Healthy:  0.00263783085427 , PADHD: 0.9252 },
{xCoord:  15.93 , ADHD:  0.031764176579 , Healthy:  0.0024046697449 , PADHD: 0.9296 },
{xCoord:  16.06 , ADHD:  0.0309198738201 , Healthy:  0.00218957451383 , PADHD: 0.9339 },
{xCoord:  16.2 , ADHD:  0.0300832148159 , Healthy:  0.00199140601336 , PADHD: 0.9379 },
{xCoord:  16.33 , ADHD:  0.0292548043136 , Healthy:  0.0018090713417 , PADHD: 0.9418 },
{xCoord:  16.47 , ADHD:  0.0284352185547 , Healthy:  0.00164152449687 , PADHD: 0.9454 },
{xCoord:  16.6 , ADHD:  0.0276250049426 , Healthy:  0.00148776671178 , PADHD: 0.9489 },
{xCoord:  16.74 , ADHD:  0.0268246817886 , Healthy:  0.00134684649729 , PADHD: 0.9522 },
{xCoord:  16.87 , ADHD:  0.0260347381367 , Healthy:  0.00121785942018 , PADHD: 0.9553 },
{xCoord:  17.01 , ADHD:  0.0252556336634 , Healthy:  0.00109994764215 , PADHD: 0.9583 },
{xCoord:  17.14 , ADHD:  0.0244877986516 , Healthy:  0.000992299245608 , PADHD: 0.9611 },
{xCoord:  17.28 , ADHD:  0.0237316340374 , Healthy:  0.000894147371113 , PADHD: 0.9637 },
{xCoord:  17.41 , ADHD:  0.0229875115248 , Healthy:  0.000804769190385 , PADHD: 0.9662 },
{xCoord:  17.55 , ADHD:  0.0222557737697 , Healthy:  0.000723484737759 , PADHD: 0.9685 },
{xCoord:  17.68 , ADHD:  0.0215367346266 , Healthy:  0.000649655621805 , PADHD: 0.9707 },
{xCoord:  17.82 , ADHD:  0.0208306794582 , Healthy:  0.000582683637589 , PADHD: 0.9728 },
{xCoord:  17.95 , ADHD:  0.0201378655041 , Healthy:  0.000522009298767 , PADHD: 0.9747 },
{xCoord:  18.09 , ADHD:  0.0194585223044 , Healthy:  0.000467110307364 , PADHD: 0.9766 },
{xCoord:  18.22 , ADHD:  0.0187928521778 , Healthy:  0.000417499977753 , PADHD: 0.9783 },
{xCoord:  18.36 , ADHD:  0.018141030748 , Healthy:  0.000372725629984 , PADHD: 0.9799 },
{xCoord:  18.49 , ADHD:  0.0175032075178 , Healthy:  0.000332366966252 , PADHD: 0.9814 },
{xCoord:  18.63 , ADHD:  0.0168795064858 , Healthy:  0.000296034443001 , PADHD: 0.9828 },
{xCoord:  18.76 , ADHD:  0.0162700268037 , Healthy:  0.000263367649813 , PADHD: 0.9841 },
{xCoord:  18.9 , ADHD:  0.0156748434697 , Healthy:  0.000234033705023 , PADHD: 0.9853 },
{xCoord:  19.03 , ADHD:  0.0150940080563 , Healthy:  0.000207725676766 , PADHD: 0.9864 },
{xCoord:  19.17 , ADHD:  0.0145275494669 , Healthy:  0.000184161037017 , PADHD: 0.9875 },
{xCoord:  19.3 , ADHD:  0.0139754747203 , Healthy:  0.000163080155098 , PADHD: 0.9885 },
{xCoord:  19.44 , ADHD:  0.013437769758 , Healthy:  0.0001442448361 , PADHD: 0.9894 },
{xCoord:  19.57 , ADHD:  0.0129144002727 , Healthy:  0.000127436908707 , PADHD: 0.9902 },
{xCoord:  19.7 , ADHD:  0.0124053125529 , Healthy:  0.000112456866015 , PADHD: 0.991 },
{xCoord:  19.84 , ADHD:  0.0119104343422 , Healthy:  9.91225621424e-05 , PADHD: 0.9917 },
{xCoord:  19.97 , ADHD:  0.0114296757097 , Healthy:  8.72679666468e-05 , PADHD: 0.9924 },
{xCoord:  20.11 , ADHD:  0.0109629299279 , Healthy:  7.67419781117e-05 , PADHD: 0.993 },
{xCoord:  20.24 , ADHD:  0.0105100743566 , Healthy:  6.74072976458e-05 , PADHD: 0.9936 },
{xCoord:  20.38 , ADHD:  0.0100709713285 , Healthy:  5.9139362489e-05 , PADHD: 0.9942 },
{xCoord:  20.51 , ADHD:  0.00964546903492 , Healthy:  5.18253394438e-05 , PADHD: 0.9947 },
{xCoord:  20.65 , ADHD:  0.00923340240904 , Healthy:  4.53631774259e-05 , PADHD: 0.9951 },
{xCoord:  20.78 , ADHD:  0.00883459400337 , Healthy:  3.96607180656e-05 , PADHD: 0.9955 },
{xCoord:  20.92 , ADHD:  0.00844885486015 , Healthy:  3.4634862981e-05 , PADHD: 0.9959 },
{xCoord:  21.05 , ADHD:  0.00807598537186 , Healthy:  3.02107960863e-05 , PADHD: 0.9963 },
{xCoord:  21.19 , ADHD:  0.00771577613004 , Healthy:  2.63212590802e-05 , PADHD: 0.9966 },
{xCoord:  21.32 , ADHD:  0.0073680087604 , Healthy:  2.29058780977e-05 , PADHD: 0.9969 },
{xCoord:  21.46 , ADHD:  0.00703245674238 , Healthy:  1.99105393679e-05 , PADHD: 0.9972 },
{xCoord:  21.59 , ADHD:  0.00670888621164 , Healthy:  1.72868116326e-05 , PADHD: 0.9974 },
{xCoord:  21.73 , ADHD:  0.00639705674371 , Healthy:  1.49914130117e-05 , PADHD: 0.9977 },
{xCoord:  21.86 , ADHD:  0.00609672211766 , Healthy:  1.29857199676e-05 , PADHD: 0.9979 },
{xCoord:  22.0 , ADHD:  0.00580763105827 , Healthy:  1.12353160103e-05 , PADHD: 0.9981 },
{xCoord:  22.13 , ADHD:  0.0055295279557 , Healthy:  9.7095777953e-06 , PADHD: 0.9982 },
{xCoord:  22.27 , ADHD:  0.00526215356164 , Healthy:  8.38129629603e-06 , PADHD: 0.9984 },
{xCoord:  22.4 , ADHD:  0.00500524566101 , Healthy:  7.22633078084e-06 , PADHD: 0.9986 },
{xCoord:  22.54 , ADHD:  0.00475853971841 , Healthy:  6.22329338046e-06 , PADHD: 0.9987 },
{xCoord:  22.67 , ADHD:  0.00452176949878 , Healthy:  5.35326210512e-06 , PADHD: 0.9988 },
{xCoord:  22.81 , ADHD:  0.0042946676617 , Healthy:  4.59952024832e-06 , PADHD: 0.9989 },
{xCoord:  22.94 , ADHD:  0.00407696632889 , Healthy:  3.94732020103e-06 , PADHD: 0.999 },
{xCoord:  23.08 , ADHD:  0.00386839762461 , Healthy:  3.38366979067e-06 , PADHD: 0.9991 },
{xCoord:  23.21 , ADHD:  0.00366869418887 , Healthy:  2.89713935466e-06 , PADHD: 0.9992 },
{xCoord:  23.35 , ADHD:  0.00347758966319 , Healthy:  2.47768785446e-06 , PADHD: 0.9993 },
{xCoord:  23.48 , ADHD:  0.00329481914903 , Healthy:  2.11650643394e-06 , PADHD: 0.9994 },
{xCoord:  23.62 , ADHD:  0.00312011963902 , Healthy:  1.80587792339e-06 , PADHD: 0.9994 },
{xCoord:  23.75 , ADHD:  0.002953230421 , Healthy:  1.53905088655e-06 , PADHD: 0.9995 },
{xCoord:  23.89 , ADHD:  0.00279389345531 , Healthy:  1.31012690269e-06 , PADHD: 0.9995 },
{xCoord:  24.02 , ADHD:  0.00264185372563 , Healthy:  1.11395986731e-06 , PADHD: 0.9996 },
{xCoord:  24.16 , ADHD:  0.00249685956362 , Healthy:  9.46066184313e-07 , PADHD: 0.9996 },
{xCoord:  24.29 , ADHD:  0.00235866294812 , Healthy:  8.02544807367e-07 , PADHD: 0.9997 },
{xCoord:  24.43 , ADHD:  0.0022270197792 , Healthy:  6.80006170202e-07 , PADHD: 0.9997 },
{xCoord:  24.56 , ADHD:  0.00210169012775 , Healthy:  5.75509122941e-07 , PADHD: 0.9997 },
{xCoord:  24.7 , ADHD:  0.00198243846123 , Healthy:  4.86505065165e-07 , PADHD: 0.9998 },
{xCoord:  24.83 , ADHD:  0.0018690338463 , Healthy:  4.10788535646e-07 , PADHD: 0.9998 },
{xCoord:  24.97 , ADHD:  0.00176125012901 , Healthy:  3.46453583687e-07 , PADHD: 0.9998 },
{xCoord:  25.1 , ADHD:  0.00165886609327 , Healthy:  2.91855307823e-07 , PADHD: 0.9998 },
{xCoord:  25.24 , ADHD:  0.00156166559855 , Healthy:  2.4557600428e-07 , PADHD: 0.9998 },
{xCoord:  25.37 , ADHD:  0.00146943769733 , Healthy:  2.06395420179e-07 , PADHD: 0.9999 },
{xCoord:  25.51 , ADHD:  0.00138197673348 , Healthy:  1.7326465514e-07 , PADHD: 0.9999 },
{xCoord:  25.64 , ADHD:  0.00129908242211 , Healthy:  1.45283299845e-07 , PADHD: 0.9999 },
{xCoord:  25.78 , ADHD:  0.00122055991198 , Healthy:  1.21679441377e-07 , PADHD: 0.9999 },
{xCoord:  25.91 , ADHD:  0.0011462198311 , Healthy:  1.01792203043e-07 , PADHD: 0.9999 },
{xCoord:  26.05 , ADHD:  0.00107587831669 , Healthy:  8.50565209593e-08 , PADHD: 0.9999 },
{xCoord:  26.18 , ADHD:  0.00100935703005 , Healthy:  7.0989891253e-08 , PADHD: 0.9999 },
{xCoord:  26.32 , ADHD:  0.000946483157479 , Healthy:  5.91808504184e-08 , PADHD: 0.9999 },
{xCoord:  26.45 , ADHD:  0.000887089397869 , Healthy:  4.92789773955e-08 , PADHD: 0.9999 },
{xCoord:  26.59 , ADHD:  0.00083101393805 , Healthy:  4.09862294743e-08 , PADHD: 1.0 },
{xCoord:  26.72 , ADHD:  0.000778100416545 , Healthy:  3.4049445378e-08 , PADHD: 1.0 },
{xCoord:  26.86 , ADHD:  0.000728197876666 , Healthy:  2.82538680035e-08 , PADHD: 1.0 },
];


//Creating custom tooltip
const CustomTooltip  = React.createClass({
  propTypes: {
    type: PropTypes.string,
    payload: PropTypes.array,
    label: PropTypes.string,
  },

  render() {
    const { active } = this.props;

    if (active) {
      const { payload, label} = this.props;
      return (
            //Needs to round and calculate correct Probability:
        <div className="custom-tooltip">

          <p className="desc">{`Given Omission score of ${label}`}</p>
          <p className="label">{`Probability of ADHD = ~ ${Math.round(100 * payload[0].value/(payload[0].value + payload[1].value))}% `}</p>
        </div>
      );
    }

    return null;
  }
});



function StackedAreaChart() {
return (
      <LineChart width={900} height={300} data={data}
            margin={{top: 20, right: 50, left: 20, bottom: 5}}>
       <XAxis dataKey="xCoord" />
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip content={<CustomTooltip/>}/>

       //Creating the legend:
       <Legend
                  payload={
                  [
                  { id: 'ADHD', value: 'ADHD', type: 'line', color: '#8884d8'},
                  { id: 'Healthy', value: 'Healthy', type: 'line', color: '#82ca9d'},
                  { id: 'Decision Boundary', value: 'Decision Boundary', type: 'line', color: 'red'},
                  { id: 'Score', value: 'Participant Score', type: 'line', color: 'blue'},
            ]
            }
            layout="vertical"
            verticalAlign="right"
            align="right" />
       />

       //Adding the lines:
       <Line type="monotone" dataKey="ADHD" stroke="#8884d8" />
       <Line type="monotone" dataKey="Healthy" stroke="#82ca9d" />
       <ReferenceLine x={8.91} stroke="red" label=""/>
       <ReferenceLine x={13.09} stroke="blue" label=""/>


      </LineChart>
    );

}


export default connect()(StackedAreaChart);


