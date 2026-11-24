import { createElement, forwardRef } from 'react';
import Svg, { Line } from 'react-native-svg';

const ChartBarMixedThin = forwardRef(function ChartBarMixedThin(
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
    createElement(Line, {"x1":"4","y1":"21","x2":"4","y2":"15","key":"0"}),
    createElement(Line, {"x1":"8","y1":"21","x2":"8","y2":"9","key":"1"}),
    createElement(Line, {"x1":"12","y1":"21","x2":"12","y2":"11","key":"2"}),
    createElement(Line, {"x1":"16","y1":"21","x2":"16","y2":"3","key":"3"}),
    createElement(Line, {"x1":"20","y1":"21","x2":"20","y2":"7","key":"4"})
  );
});

ChartBarMixedThin.displayName = 'ChartBarMixedThin';

export default ChartBarMixedThin;
export { ChartBarMixedThin };
