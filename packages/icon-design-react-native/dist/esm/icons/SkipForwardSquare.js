import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SkipForwardSquare = forwardRef(function SkipForwardSquare(
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
    createElement(Path, {"d":"M17 7L17 17","key":"0"}),
    createElement(Path, {"d":"M7 7.766L7 16.234C7 17.012 7.848 17.492 8.516 17.09L17 12L8.516 6.91C7.848 6.508 7 6.988 7 7.766Z","key":"1"}),
    createElement(Path, {"d":"M5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 19C2 20.656 3.344 22 5 22Z","key":"2"})
  );
});

SkipForwardSquare.displayName = 'SkipForwardSquare';

export default SkipForwardSquare;
export { SkipForwardSquare };
