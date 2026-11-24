import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextJ = forwardRef(function TextJ(
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
    createElement(Path, {"d":"M18 2.023L18 16C18 19.313 15.313 22 12 22C8.688 22 6 19.313 6 16L6 15","key":"0"})
  );
});

TextJ.displayName = 'TextJ';

export default TextJ;
export { TextJ };
