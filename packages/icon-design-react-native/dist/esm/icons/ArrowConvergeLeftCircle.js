import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowConvergeLeftCircle = forwardRef(function ArrowConvergeLeftCircle(
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
    createElement(Path, {"d":"M2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12Z","key":"0"}),
    createElement(Path, {"d":"M14 6L12 8L14 10","key":"1"}),
    createElement(Path, {"d":"M8 10L10 12L8 14","key":"2"}),
    createElement(Path, {"d":"M14 14L12 16L14 18","key":"3"}),
    createElement(Path, {"d":"M5 12L10 12","key":"4"}),
    createElement(Path, {"d":"M12 8L17 8","key":"5"}),
    createElement(Path, {"d":"M12 16L17 16","key":"6"})
  );
});

ArrowConvergeLeftCircle.displayName = 'ArrowConvergeLeftCircle';

export default ArrowConvergeLeftCircle;
export { ArrowConvergeLeftCircle };
