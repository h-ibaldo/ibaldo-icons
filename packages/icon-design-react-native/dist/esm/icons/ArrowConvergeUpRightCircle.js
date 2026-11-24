import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowConvergeUpRightCircle = forwardRef(function ArrowConvergeUpRightCircle(
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
    createElement(Path, {"d":"M15 18L15 15L12 15","key":"1"}),
    createElement(Path, {"d":"M13 8L13 11L16 11","key":"2"}),
    createElement(Path, {"d":"M9 12L9 9L6 9","key":"3"}),
    createElement(Path, {"d":"M17 7L13 11","key":"4"}),
    createElement(Path, {"d":"M15 15L11 19","key":"5"}),
    createElement(Path, {"d":"M9 9L5 13","key":"6"})
  );
});

ArrowConvergeUpRightCircle.displayName = 'ArrowConvergeUpRightCircle';

export default ArrowConvergeUpRightCircle;
export { ArrowConvergeUpRightCircle };
