import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextLetterSpacing = forwardRef(function TextLetterSpacing(
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
    createElement(Path, {"d":"M7 16L12 7L17 16","key":"0"}),
    createElement(Path, {"d":"M8.668 13L15.332 13","key":"1"}),
    createElement(Path, {"d":"M22 2L22 22","key":"2"}),
    createElement(Path, {"d":"M2 2L2 22","key":"3"})
  );
});

TextLetterSpacing.displayName = 'TextLetterSpacing';

export default TextLetterSpacing;
export { TextLetterSpacing };
