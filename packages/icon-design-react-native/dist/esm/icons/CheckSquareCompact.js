import { createElement, forwardRef } from 'react';
import Svg, { Polyline, Rect } from 'react-native-svg';

const CheckSquareCompact = forwardRef(function CheckSquareCompact(
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
    createElement(Polyline, {"points":"8.949462885140747 12.000000000480213 10.949462885140747 14.000000000480213 14.949462885140747 10.000000000480213","key":"0"}),
    createElement(Rect, {"x":"3.949462885140747","y":"4.000000000480213","width":"16","height":"16","rx":"3","ry":"3","key":"1"})
  );
});

CheckSquareCompact.displayName = 'CheckSquareCompact';

export default CheckSquareCompact;
export { CheckSquareCompact };
