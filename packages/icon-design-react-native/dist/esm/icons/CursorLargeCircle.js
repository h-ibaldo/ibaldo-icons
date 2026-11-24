import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CursorLargeCircle = forwardRef(function CursorLargeCircle(
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
    createElement(Path, {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z","key":"0"}),
    createElement(Path, {"d":"M7.855 7.855L10.449 16.813L12.469 14.793L14.777 17.098L17.098 14.777L14.793 12.469L16.813 10.449Z","key":"1"})
  );
});

CursorLargeCircle.displayName = 'CursorLargeCircle';

export default CursorLargeCircle;
export { CursorLargeCircle };
