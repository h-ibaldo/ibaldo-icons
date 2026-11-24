import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextW = forwardRef(function TextW(
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
    createElement(Path, {"d":"M2 2L7 22L12 8L17 22L22 2","key":"0"})
  );
});

TextW.displayName = 'TextW';

export default TextW;
export { TextW };
