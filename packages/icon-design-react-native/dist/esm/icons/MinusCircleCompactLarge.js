import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const MinusCircleCompactLarge = forwardRef(function MinusCircleCompactLarge(
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
    createElement(Circle, {"cx":"12","cy":"12","r":"8","key":"0"}),
    createElement(Line, {"x1":"8","y1":"12","x2":"16","y2":"12","key":"1"})
  );
});

MinusCircleCompactLarge.displayName = 'MinusCircleCompactLarge';

export default MinusCircleCompactLarge;
export { MinusCircleCompactLarge };
