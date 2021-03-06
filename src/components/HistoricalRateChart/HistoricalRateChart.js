import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Dot } from 'recharts';
import { formatApy } from 'helpers/format';

const HistoricalRateChart = ({ chartData }) => {
  const isDarkTheme = localStorage.getItem('nightMode') === 'true' ? true : false;

  const xAxisDataKey = 'date';
  const yAxisDataKey = 'apy';

  const areaColor = isDarkTheme ? '#313759' : 'rgba(166,152,133,0.2)';
  const lineColor = isDarkTheme ? '#8585A6' : '#A69885';
  const firstColor = lineColor;
  const lastColor = isDarkTheme ? '#FFF' : '#000';

  const renderLabel = props => {
    const { index, x, y } = props;
    const { apy } = chartData[index];
    const labelValue = formatApy(apy, '0%');
    const first = index === 0;
    const last = index === chartData.length - 1;
    const textStyle = { fontSize: '12px' };
    if (first) {
      const labelPosWithOffsetX = x - (labelValue.length * 4 + 20);
      const labelPosWithOffsetY = y;
      return (
        <text style={textStyle} fill={firstColor} x={labelPosWithOffsetX} y={labelPosWithOffsetY}>
          {labelValue}
        </text>
      );
    } else if (last) {
      const labelPosWithOffsetX = x + 5;
      const labelPosWithOffsetY = y;
      return (
        <text style={textStyle} fill={lastColor} x={labelPosWithOffsetX} y={labelPosWithOffsetY}>
          {labelValue}
        </text>
      );
    } else {
      return null;
    }
  };

  const renderDot = props => {
    const { index } = props;
    const last = index === chartData.length - 1;
    if (last) {
      return <Dot {...props} fill={lastColor} />;
    } else {
      return null;
    }
  };

  return (
    <AreaChart
      data={chartData}
      margin={{ top: 10, right: 55, left: 55, bottom: 0 }}
      height={35}
      width={180}
    >
      <XAxis hide dataKey={xAxisDataKey} />
      <YAxis hide />
      <Area
        type="monotone"
        dataKey={yAxisDataKey}
        stroke={lineColor}
        fill={areaColor}
        fillOpacity={100}
        label={renderLabel}
        dot={renderDot}
        isAnimationActive={false}
      />
    </AreaChart>
  );
};

export default HistoricalRateChart;
