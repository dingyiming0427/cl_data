import React from 'react';
import { connect } from 'dva';
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis} from 'recharts';

const data = [
    { subject: 'Commission', A: 0.5, B: 0.8, fullMark: 1 },
    { subject: 'Omission', A: 0.4, B: 0.8, fullMark: 1 },
    { subject: 'RTV', A: 0.3, B: 0.8, fullMark: 1 },
    { subject: 'dPrime', A: 0.5, B: 0.8, fullMark: 1 },
    { subject: 'Beta', A: 0.6, B: 0.8, fullMark: 1 },
    { subject: 'SNAP', A: 0.4, B: 0.8, fullMark: 1 },
];

const TwoLevelPieChart = React.createClass({
	render () {
  	return (
    	<RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
          <Radar name="BayesBound" dataKey="B" stroke="#A1C3D1" fill="#A1C3D1" fillOpacity={0.7}/>
          <Radar name="Subject" dataKey="A" stroke="#F172A1" fill="#F172A1" fillOpacity={0.7}/>
          <PolarGrid gridType="polygon" />
          <Legend />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={0} domain={[0, 1]} orientation="right" tickCount={5} />
        </RadarChart>
    );
  }
})

// ReactDOM.render(
//   <TwoLevelPieChart />,
//   document.getElementById('container')
// );

export default connect()(TwoLevelPieChart);