import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextAlignCenter = forwardRef(function TextAlignCenter(
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
    createElement(Path, {"d":"M5 6L19 6","key":"0"}),
    createElement(Path, {"d":"M7 10L17 10","key":"1"}),
    createElement(Path, {"d":"M5 14L19 14","key":"2"}),
    createElement(Path, {"d":"M8 18L16 18","key":"3"})
  );
});

TextAlignCenter.displayName = 'TextAlignCenter';

export default TextAlignCenter;
export { TextAlignCenter };
