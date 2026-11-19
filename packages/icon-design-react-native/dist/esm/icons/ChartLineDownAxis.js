import { createElement, forwardRef } from 'react';
import Svg, { Polyline } from 'react-native-svg';

const ChartLineDownAxis = forwardRef(function ChartLineDownAxis(
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
    createElement(Polyline, {"points":"2 2 2 22 22 22","key":"0"}),
    createElement(Polyline, {"points":"6 7 12 14 16 10 22 17","key":"1"})
  );
});

ChartLineDownAxis.displayName = 'ChartLineDownAxis';

export default ChartLineDownAxis;
export { ChartLineDownAxis };
