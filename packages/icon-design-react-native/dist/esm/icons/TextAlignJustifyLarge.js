import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextAlignJustifyLarge = forwardRef(function TextAlignJustifyLarge(
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
    createElement(Path, {"d":"M4 5L20 5","key":"0"}),
    createElement(Path, {"d":"M4 10L20 10","key":"1"}),
    createElement(Path, {"d":"M4 15L20 15","key":"2"}),
    createElement(Path, {"d":"M4 20L20 20","key":"3"})
  );
});

TextAlignJustifyLarge.displayName = 'TextAlignJustifyLarge';

export default TextAlignJustifyLarge;
export { TextAlignJustifyLarge };
