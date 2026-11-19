import { createElement, forwardRef } from 'react';
import Svg, { Circle, Path, Polyline } from 'react-native-svg';

const ChartLineSquareDot = forwardRef(function ChartLineSquareDot(
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
    createElement(Path, {"d":"M22,10.000000004136382v7c0,2.761423749150708-2.238576250850201,5-5,5H7c-2.761423749139794,0-5-2.238576250849292-5-5V7.000000004136382c0-2.761423749150708,2.238576250860206-5,5-5h7","key":"0"}),
    createElement(Polyline, {"points":"7 15.000000004136382 10 11.000000004136382 14 14.000000004136382 17 10.000000004136382","key":"1"}),
    createElement(Circle, {"cx":"19.5","cy":"4.500000004136382","r":"2.5","key":"2"})
  );
});

ChartLineSquareDot.displayName = 'ChartLineSquareDot';

export default ChartLineSquareDot;
export { ChartLineSquareDot };
