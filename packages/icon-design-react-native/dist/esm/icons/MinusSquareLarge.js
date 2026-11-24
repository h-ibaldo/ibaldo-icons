import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const MinusSquareLarge = forwardRef(function MinusSquareLarge(
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
    createElement(Rect, {"x":"2","y":"2","width":"20","height":"20","rx":"3","ry":"3","key":"0"}),
    createElement(Line, {"x1":"7","y1":"12","x2":"17","y2":"12","key":"1"})
  );
});

MinusSquareLarge.displayName = 'MinusSquareLarge';

export default MinusSquareLarge;
export { MinusSquareLarge };
