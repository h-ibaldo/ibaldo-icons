import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextAlignRight = forwardRef(function TextAlignRight(
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
    createElement(Path, {"d":"M19 6L5 6","key":"0"}),
    createElement(Path, {"d":"M19 10L9 10","key":"1"}),
    createElement(Path, {"d":"M19 14L5 14","key":"2"}),
    createElement(Path, {"d":"M19 18L12 18","key":"3"})
  );
});

TextAlignRight.displayName = 'TextAlignRight';

export default TextAlignRight;
export { TextAlignRight };
