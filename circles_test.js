import React from 'react';
import { connect } from 'dva';
import {RadialBarChart, RadialBar, Legend} from 'recharts';

const data = [
      {name: 'Omission', uv: 31.47, pv: 2400, fill: '#8884d8'},
      {name: 'Commission', uv: 26.69, pv: 4567, fill: '#83a6ed'},
      {name: 'RTV', uv: 15.69, pv: 1398, fill: '#8dd1e1'},
      {name: 'dPrime', uv: 8.22, pv: 9800, fill: '#82ca9d'},
      {name: 'Beta', uv: 8.63, pv: 3908, fill: '#a4de6c'},
      {name: 'SnapIn', uv: 2.63, pv: 4800, fill: '#d0ed57'},
      {name: 'SnapHyp', uv: 6.67, pv: 4800, fill: '#ffc658'}
    ];
    
  const style = {
  	top: 0,
  	left: 350,
  	lineHeight: '35px'
  };

const SimpleRadialBarChart = React.createClass({
	render () {
  	return (
    	<RadialBarChart width={700} height={700} cx={300} cy={300} innerRadius={50} outerRadius={200} barSize={30} data={data}>
        <RadialBar minAngle={15} label background clockWise={true} dataKey='uv'/>
        <Legend iconSize={30} width={400} height={75} layout='horizontal' verticalAlign='middle' wrapperStyle={style}/>
        </RadialBarChart>
    );
  }
})

// ReactDOM.render(
//   <SimpleRadialBarChart />,
//   document.getElementById('container')
// );

export default connect()(SimpleRadialBarChart);