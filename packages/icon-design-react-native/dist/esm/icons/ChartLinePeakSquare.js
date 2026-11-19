import { createElement, forwardRef } from 'react';
import Svg, { Polyline, Rect } from 'react-native-svg';

const ChartLinePeakSquare = forwardRef(function ChartLinePeakSquare(
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
    createElement(Rect, {"x":"1.949462885141656","y":"2.000000000749424","width":"20","height":"20","rx":"5","ry":"5","key":"0"}),
    createElement(Polyline, {"points":"6.949462885141656 12.000000000927685 9.949462885141656 16.000000000927685 13.949462885141656 8.000000000927685 16.949462885141656 12.000000000927685","key":"1"})
  );
});

ChartLinePeakSquare.displayName = 'ChartLinePeakSquare';

export default ChartLinePeakSquare;
export { ChartLinePeakSquare };
