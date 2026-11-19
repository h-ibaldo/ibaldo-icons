import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowConvergeUpCircle = forwardRef(function ArrowConvergeUpCircle(
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
    createElement(Path, {"d":"M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2Z","key":"0"}),
    createElement(Path, {"d":"M6 14L8 12L10 14","key":"1"}),
    createElement(Path, {"d":"M10 8L12 10L14 8","key":"2"}),
    createElement(Path, {"d":"M14 14L16 12L18 14","key":"3"}),
    createElement(Path, {"d":"M12 5L12 10","key":"4"}),
    createElement(Path, {"d":"M8 12L8 17","key":"5"}),
    createElement(Path, {"d":"M16 12L16 17","key":"6"})
  );
});

ArrowConvergeUpCircle.displayName = 'ArrowConvergeUpCircle';

export default ArrowConvergeUpCircle;
export { ArrowConvergeUpCircle };
