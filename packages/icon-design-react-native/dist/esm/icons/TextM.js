import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextM = forwardRef(function TextM(
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
    createElement(Path, {"d":"M3 22L3 2L12 21L21 2L21 22.023","key":"0"})
  );
});

TextM.displayName = 'TextM';

export default TextM;
export { TextM };
