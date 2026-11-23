import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SpellCheck = forwardRef(function SpellCheck(
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
    createElement(Path, {"d":"M2 22L5.902 2.492C5.961 2.207 6.211 2 6.5 2C6.789 2 7.039 2.207 7.098 2.492L11 22","key":"0"}),
    createElement(Path, {"d":"M3.602 14L9.398 14","key":"1"}),
    createElement(Path, {"d":"M14 13L17 17L22 10","key":"2"})
  );
});

SpellCheck.displayName = 'SpellCheck';

export default SpellCheck;
export { SpellCheck };
