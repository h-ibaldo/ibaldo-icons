import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const ChartBarCircleThin = forwardRef(function ChartBarCircleThin(
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
    createElement(Circle, {"cx":"12","cy":"12","r":"10","key":"0"}),
    createElement(Line, {"x1":"8","y1":"15","x2":"8","y2":"12","key":"1"}),
    createElement(Line, {"x1":"12","y1":"15","x2":"12","y2":"8","key":"2"}),
    createElement(Line, {"x1":"16","y1":"15","x2":"16","y2":"10","key":"3"})
  );
});

ChartBarCircleThin.displayName = 'ChartBarCircleThin';

export default ChartBarCircleThin;
export { ChartBarCircleThin };
