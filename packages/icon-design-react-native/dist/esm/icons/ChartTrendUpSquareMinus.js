import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Polyline } from 'react-native-svg';

const ChartTrendUpSquareMinus = forwardRef(function ChartTrendUpSquareMinus(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Path, {"d":"M21.949462885142566,9.000000000480213v8c0,2.761423749150708-2.238576250850201,5-5,5H6.949462885142566c-2.761423749149799,0-5-2.238576250849292-5-5V7.000000000480213c0-2.761423749150708,2.238576250850201-5,5-5h6","key":"0"}),
    createElement(Polyline, {"points":"6.949462885142566 16.000000000480213 9.949462885142566 13.000000000480213 11.949462885142566 15.000000000480213 16.949462885142566 10.000000000480213","key":"1"}),
    createElement(Polyline, {"points":"16.949462885142566 13.000000000480213 16.949462885142566 10.000000000480213 13.949462885142566 10.000000000480213","key":"2"}),
    createElement(Line, {"x1":"16.949462885142566","y1":"4.500000000571163","x2":"21.949462885053435","y2":"4.500000000480213","key":"3"})
  );
});

ChartTrendUpSquareMinus.displayName = 'ChartTrendUpSquareMinus';

export default ChartTrendUpSquareMinus;
export { ChartTrendUpSquareMinus };
