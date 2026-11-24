import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextE = forwardRef(function TextE(
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
    createElement(Path, {"d":"M19 22.023L5 22.023L5 2L18.039 2","key":"0"}),
    createElement(Path, {"d":"M6 11L16 11","key":"1"})
  );
});

TextE.displayName = 'TextE';

export default TextE;
export { TextE };
