import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Code = forwardRef(function Code(
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
    createElement(Path, {"d":"M6 8L2 12L6 16","key":"0"}),
    createElement(Path, {"d":"M18 8L22 12L18 16","key":"1"}),
    createElement(Path, {"d":"M14 5L10 19","key":"2"})
  );
});

Code.displayName = 'Code';

export default Code;
export { Code };
