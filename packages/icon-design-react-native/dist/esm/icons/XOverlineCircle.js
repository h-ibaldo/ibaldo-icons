import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const XOverlineCircle = forwardRef(function XOverlineCircle(
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
    createElement(Path, {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z","key":"0"}),
    createElement(Path, {"d":"M8 8L16 8","key":"1"}),
    createElement(Path, {"d":"M10 16L14 12","key":"2"}),
    createElement(Path, {"d":"M14 16L10 12","key":"3"})
  );
});

XOverlineCircle.displayName = 'XOverlineCircle';

export default XOverlineCircle;
export { XOverlineCircle };
