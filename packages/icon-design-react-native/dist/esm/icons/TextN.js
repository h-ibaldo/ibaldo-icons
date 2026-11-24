import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextN = forwardRef(function TextN(
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
    createElement(Path, {"d":"M5 22L5 2L19 22L19 2","key":"0"})
  );
});

TextN.displayName = 'TextN';

export default TextN;
export { TextN };
