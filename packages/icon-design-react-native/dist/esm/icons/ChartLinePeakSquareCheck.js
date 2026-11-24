import { createElement, forwardRef } from 'react';
import Svg, { Path, Polyline } from 'react-native-svg';

const ChartLinePeakSquareCheck = forwardRef(function ChartLinePeakSquareCheck(
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
    createElement(Polyline, {"points":"16.949462885141656 4.000000000927685 18.949462885141656 6.000000000927685 21.949462885141656 3.000000000927685","key":"0"}),
    createElement(Path, {"d":"M21.949462885141656,9.000000000927685v8c0,2.761423749150708-2.238576250847473,5-5,5H6.949462885141656c-2.761423749149799,0-5-2.238576250849292-5-5V7.000000000927685c0-2.76142374914707,2.238576250850201-5,5-5h6","key":"1"}),
    createElement(Polyline, {"points":"6.949462885141656 12.000000000927685 9.949462885141656 16.000000000927685 13.949462885141656 8.000000000927685 16.949462885141656 12.000000000927685","key":"2"})
  );
});

ChartLinePeakSquareCheck.displayName = 'ChartLinePeakSquareCheck';

export default ChartLinePeakSquareCheck;
export { ChartLinePeakSquareCheck };
