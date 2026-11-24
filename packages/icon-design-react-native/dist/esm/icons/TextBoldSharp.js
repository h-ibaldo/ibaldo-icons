import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextBoldSharp = forwardRef(function TextBoldSharp(
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
    createElement(Path, {"d":"M6 12L15 12C17.211 12 19 13.789 19 16C19 18.211 17.211 20 15 20L6 20L6 4L14 4C16.211 4 18 5.789 18 8C18 10.211 16.211 12 14 12","key":"0"})
  );
});

TextBoldSharp.displayName = 'TextBoldSharp';

export default TextBoldSharp;
export { TextBoldSharp };
