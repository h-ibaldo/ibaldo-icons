import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextV = forwardRef(function TextV(
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
    createElement(Path, {"d":"M4 2L12 22L20 2","key":"0"})
  );
});

TextV.displayName = 'TextV';

export default TextV;
export { TextV };
