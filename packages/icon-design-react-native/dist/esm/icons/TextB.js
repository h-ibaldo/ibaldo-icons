import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextB = forwardRef(function TextB(
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
    createElement(Path, {"d":"M5 11L13.5 11C16.539 11 19 13.461 19 16.5C19 19.539 16.539 22 13.5 22L5 22L5 2L13.5 2C15.984 2 18 4.016 18 6.5C18 8.984 15.984 11 13.5 11L5 11","key":"0"})
  );
});

TextB.displayName = 'TextB';

export default TextB;
export { TextB };
