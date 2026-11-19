import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowRightFromDot = forwardRef(function ArrowRightFromDot(
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
    createElement(Path, {"d":"M19 9L22 12L19 15","key":"0"}),
    createElement(Path, {"d":"M12 12L22 12","key":"1"}),
    createElement(Path, {"d":"M5 15C6.656 15 8 13.656 8 12C8 10.344 6.656 9 5 9C3.344 9 2 10.344 2 12C2 13.656 3.344 15 5 15Z","key":"2"})
  );
});

ArrowRightFromDot.displayName = 'ArrowRightFromDot';

export default ArrowRightFromDot;
export { ArrowRightFromDot };
