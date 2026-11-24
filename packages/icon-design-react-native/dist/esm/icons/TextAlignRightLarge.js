import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextAlignRightLarge = forwardRef(function TextAlignRightLarge(
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
    createElement(Path, {"d":"M20 5L4 5","key":"0"}),
    createElement(Path, {"d":"M20 10L8 10","key":"1"}),
    createElement(Path, {"d":"M20 15L4 15","key":"2"}),
    createElement(Path, {"d":"M20 20L11 20","key":"3"})
  );
});

TextAlignRightLarge.displayName = 'TextAlignRightLarge';

export default TextAlignRightLarge;
export { TextAlignRightLarge };
