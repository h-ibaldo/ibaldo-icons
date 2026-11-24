import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextAaSquareLarge2 = forwardRef(function TextAaSquareLarge2(
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
    createElement(Path, {"d":"M16 17C14.895 17 14 16.105 14 15L14 14C14 12.895 14.895 12 16 12L18 12L18 15C18 16.105 17.105 17 16 17Z","key":"1"}),
    createElement(Path, {"d":"M19 17L18 16L18 10C18 8.895 17.105 8 16 8C15 8 14 9 14 9","key":"2"}),
    createElement(Path, {"d":"M6 14L10 14","key":"3"}),
    createElement(Path, {"d":"M5 17L6.84 7.805C6.934 7.336 7.344 7 7.82 7L8.18 7C8.656 7 9.066 7.336 9.16 7.805L11 17","key":"4"})
  );
});

TextAaSquareLarge2.displayName = 'TextAaSquareLarge2';

export default TextAaSquareLarge2;
export { TextAaSquareLarge2 };
