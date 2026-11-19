import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowRightToDot = forwardRef(function ArrowRightToDot(
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
    createElement(Path, {"d":"M9 9L12 12L9 15","key":"0"}),
    createElement(Path, {"d":"M2 12L12 12","key":"1"}),
    createElement(Path, {"d":"M19 9C17.344 9 16 10.344 16 12C16 13.656 17.344 15 19 15C20.656 15 22 13.656 22 12C22 10.344 20.656 9 19 9Z","key":"2"})
  );
});

ArrowRightToDot.displayName = 'ArrowRightToDot';

export default ArrowRightToDot;
export { ArrowRightToDot };
