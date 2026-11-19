import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PointerStraight = forwardRef(function PointerStraight(
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
    createElement(Path, {"d":"M2 4.355L2 19.586C2 20.477 3.078 20.922 3.707 20.293L8 16L14.023 16C14.926 16 15.367 14.906 14.719 14.281L3.695 3.637C3.059 3.023 2 3.473 2 4.355Z","key":"0"})
  );
});

PointerStraight.displayName = 'PointerStraight';

export default PointerStraight;
export { PointerStraight };
