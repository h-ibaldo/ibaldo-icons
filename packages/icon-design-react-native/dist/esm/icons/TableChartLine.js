import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline, Rect } from 'react-native-svg';

const TableChartLine = forwardRef(function TableChartLine(
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
    createElement(Rect, {"x":"1.949462885142566","y":"2.000000000480213","width":"20","height":"20","key":"0"}),
    createElement(Line, {"x1":"1.949462885142566","y1":"6.000000000480213","x2":"21.949462885142566","y2":"6.000000000480213","key":"1"}),
    createElement(Line, {"x1":"5.949462885142566","y1":"2.000000000480213","x2":"5.949462885142566","y2":"22.000000000480213","key":"2"}),
    createElement(Polyline, {"points":"9.949462885142566 17.000000000480213 12.949462885142566 13.000000000480213 14.949462885142566 15.000000000480213 17.949462885142566 11.000000000480213","key":"3"})
  );
});

TableChartLine.displayName = 'TableChartLine';

export default TableChartLine;
export { TableChartLine };
