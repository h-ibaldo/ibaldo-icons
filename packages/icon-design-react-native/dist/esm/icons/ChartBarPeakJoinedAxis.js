import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline } from 'react-native-svg';

const ChartBarPeakJoinedAxis = forwardRef(function ChartBarPeakJoinedAxis(
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
    createElement(Polyline, {"points":"5 22 5 13 10 13 10 4 15 4 15 9 20 9 20 22","key":"1"}),
    createElement(Line, {"x1":"10","y1":"13","x2":"10","y2":"22","key":"2"}),
    createElement(Line, {"x1":"15","y1":"9","x2":"15","y2":"22","key":"3"})
  );
});

ChartBarPeakJoinedAxis.displayName = 'ChartBarPeakJoinedAxis';

export default ChartBarPeakJoinedAxis;
export { ChartBarPeakJoinedAxis };
