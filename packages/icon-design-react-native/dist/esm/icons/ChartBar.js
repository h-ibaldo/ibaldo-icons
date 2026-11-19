import { createElement, forwardRef } from 'react';
import Svg, { Rect } from 'react-native-svg';

const ChartBar = forwardRef(function ChartBar(
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
    createElement(Rect, {"x":"2","y":"13","width":"4","height":"8","key":"0"}),
    createElement(Rect, {"x":"10","y":"8","width":"4","height":"13","key":"1"}),
    createElement(Rect, {"x":"18","y":"3","width":"4","height":"18","key":"2"})
  );
});

ChartBar.displayName = 'ChartBar';

export default ChartBar;
export { ChartBar };
