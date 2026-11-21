import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SparklePlusDot = forwardRef(function SparklePlusDot(
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
    createElement(Path, {"d":"M6 11.5C9.59 11.5 12.5 14.41 12.5 18","key":"0"}),
    createElement(Path, {"d":"M19 11.5C15.41 11.5 12.5 14.41 12.5 18","key":"1"}),
    createElement(Path, {"d":"M19 11.5C15.41 11.5 12.5 8.59 12.5 5","key":"2"}),
    createElement(Path, {"d":"M6 11.5C9.59 11.5 12.5 8.59 12.5 5","key":"3"}),
    createElement(Path, {"d":"M17 5C17 3.895 17.895 3 19 3C20.105 3 21 3.895 21 5C21 6.105 20.105 7 19 7C17.895 7 17 6.105 17 5Z","key":"4"}),
    createElement(Path, {"d":"M5.5 16L5.5 21","key":"5"}),
    createElement(Path, {"d":"M8 18.5L3 18.5","key":"6"})
  );
});

SparklePlusDot.displayName = 'SparklePlusDot';

export default SparklePlusDot;
export { SparklePlusDot };
