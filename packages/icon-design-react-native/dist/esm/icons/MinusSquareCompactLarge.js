import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const MinusSquareCompactLarge = forwardRef(function MinusSquareCompactLarge(
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
    createElement(Rect, {"x":"4","y":"4","width":"16","height":"16","rx":"3","ry":"3","key":"0"}),
    createElement(Line, {"x1":"8","y1":"12","x2":"16","y2":"12","key":"1"})
  );
});

MinusSquareCompactLarge.displayName = 'MinusSquareCompactLarge';

export default MinusSquareCompactLarge;
export { MinusSquareCompactLarge };
