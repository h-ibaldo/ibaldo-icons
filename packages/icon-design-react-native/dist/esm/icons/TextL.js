import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextL = forwardRef(function TextL(
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
    createElement(Path, {"d":"M6 2.023L6 22","key":"0"}),
    createElement(Path, {"d":"M17.977 22L6 22","key":"1"})
  );
});

TextL.displayName = 'TextL';

export default TextL;
export { TextL };
