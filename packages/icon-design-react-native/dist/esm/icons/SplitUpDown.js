import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SplitUpDown = forwardRef(function SplitUpDown(
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
    createElement(Path, {"d":"M22 2L22 6C22 7.105 21.105 8 20 8L4 8C2.895 8 2 7.105 2 6L2 2","key":"0"}),
    createElement(Path, {"d":"M2 22L2 18C2 16.895 2.895 16 4 16L20 16C21.105 16 22 16.895 22 18L22 22","key":"1"}),
    createElement(Path, {"d":"M22 12L20 12","key":"2"}),
    createElement(Path, {"d":"M16 12L14 12","key":"3"}),
    createElement(Path, {"d":"M10 12L8 12","key":"4"}),
    createElement(Path, {"d":"M4 12L2 12","key":"5"})
  );
});

SplitUpDown.displayName = 'SplitUpDown';

export default SplitUpDown;
export { SplitUpDown };
