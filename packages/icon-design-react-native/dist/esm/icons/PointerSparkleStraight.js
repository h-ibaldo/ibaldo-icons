import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PointerSparkleStraight = forwardRef(function PointerSparkleStraight(
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
    createElement(Path, {"d":"M2 6.547L2 20.738C2 21.609 3.031 22.063 3.672 21.48L7.5 18L12.707 18C13.578 18 14.035 16.957 13.438 16.32L3.73 5.867C3.113 5.199 2 5.637 2 6.547Z","key":"0"}),
    createElement(Path, {"d":"M17 3L17 4","key":"1"}),
    createElement(Path, {"d":"M17 10L17 11","key":"2"}),
    createElement(Path, {"d":"M13 7L14 7","key":"3"}),
    createElement(Path, {"d":"M20 7L21 7","key":"4"})
  );
});

PointerSparkleStraight.displayName = 'PointerSparkleStraight';

export default PointerSparkleStraight;
export { PointerSparkleStraight };
