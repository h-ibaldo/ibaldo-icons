import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextH = forwardRef(function TextH(
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
    createElement(Path, {"d":"M5 2.023L5 22","key":"0"}),
    createElement(Path, {"d":"M19 12.012L5 12.012","key":"1"}),
    createElement(Path, {"d":"M19 2.023L19 22","key":"2"})
  );
});

TextH.displayName = 'TextH';

export default TextH;
export { TextH };
