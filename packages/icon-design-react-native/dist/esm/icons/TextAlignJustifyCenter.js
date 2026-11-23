import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextAlignJustifyCenter = forwardRef(function TextAlignJustifyCenter(
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
    createElement(Path, {"d":"M2 5L22.027 5","key":"0"}),
    createElement(Path, {"d":"M2 12L22.027 12","key":"1"}),
    createElement(Path, {"d":"M6 19L18.027 19","key":"2"})
  );
});

TextAlignJustifyCenter.displayName = 'TextAlignJustifyCenter';

export default TextAlignJustifyCenter;
export { TextAlignJustifyCenter };
