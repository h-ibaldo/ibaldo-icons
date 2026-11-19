import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextAaSquareBoxy = forwardRef(function TextAaSquareBoxy(
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
    createElement(Path, {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22Z","key":"0"}),
    createElement(Path, {"d":"M6 14L10 14","key":"1"}),
    createElement(Path, {"d":"M5 17L6.84 7.805C6.934 7.336 7.344 7 7.82 7L8.18 7C8.656 7 9.066 7.336 9.16 7.805L11 17","key":"2"}),
    createElement(Path, {"d":"M18 17L16 17C14.895 17 14 16.105 14 15L14 12C14 10.895 14.895 10 16 10C17.105 10 18 10.895 18 12Z","key":"3"}),
    createElement(Path, {"d":"M18 15L18 10","key":"4"})
  );
});

TextAaSquareBoxy.displayName = 'TextAaSquareBoxy';

export default TextAaSquareBoxy;
export { TextAaSquareBoxy };
