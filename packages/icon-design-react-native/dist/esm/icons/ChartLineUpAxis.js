import { createElement, forwardRef } from 'react';
import Svg, { Polyline } from 'react-native-svg';

const ChartLineUpAxis = forwardRef(function ChartLineUpAxis(
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
    createElement(Polyline, {"points":"6 17 12 10 16 14 22 7","key":"1"})
  );
});

ChartLineUpAxis.displayName = 'ChartLineUpAxis';

export default ChartLineUpAxis;
export { ChartLineUpAxis };
