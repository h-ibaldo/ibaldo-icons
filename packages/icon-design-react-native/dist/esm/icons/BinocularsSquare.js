import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BinocularsSquare = forwardRef(function BinocularsSquare(
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
    createElement(Path, {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z","key":"0"}),
    createElement(Path, {"d":"M10 15C10 13.895 9.105 13 8 13C6.895 13 6 13.895 6 15C6 16.105 6.895 17 8 17C9.105 17 10 16.105 10 15Z","key":"1"}),
    createElement(Path, {"d":"M18 15C18 13.895 17.105 13 16 13C14.895 13 14 13.895 14 15C14 16.105 14.895 17 16 17C17.105 17 18 16.105 18 15Z","key":"2"}),
    createElement(Path, {"d":"M10 9L14 9","key":"3"}),
    createElement(Path, {"d":"M10 15L14 15","key":"4"}),
    createElement(Path, {"d":"M10 15L10 8.59C10 7.711 9.289 7 8.41 7L8.402 7C7.602 7 6.926 7.598 6.824 8.395L6 15","key":"5"}),
    createElement(Path, {"d":"M14 15L14 8.59C14 7.711 14.711 7 15.59 7L15.598 7C16.398 7 17.074 7.598 17.176 8.395L18 15","key":"6"})
  );
});

BinocularsSquare.displayName = 'BinocularsSquare';

export default BinocularsSquare;
export { BinocularsSquare };
