import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowLeftRightCircleHarpoon = forwardRef(function ArrowLeftRightCircleHarpoon(
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
    createElement(Path, {"d":"M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z","key":"0"}),
    createElement(Path, {"d":"M7 10L17 10L14 7","key":"1"}),
    createElement(Path, {"d":"M17 14L7 14L10 17","key":"2"})
  );
});

ArrowLeftRightCircleHarpoon.displayName = 'ArrowLeftRightCircleHarpoon';

export default ArrowLeftRightCircleHarpoon;
export { ArrowLeftRightCircleHarpoon };
