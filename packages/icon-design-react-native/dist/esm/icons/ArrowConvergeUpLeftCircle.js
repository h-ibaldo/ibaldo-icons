import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowConvergeUpLeftCircle = forwardRef(function ArrowConvergeUpLeftCircle(
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
    createElement(Path, {"d":"M9 18L9 15L12 15","key":"1"}),
    createElement(Path, {"d":"M11 8L11 11L8 11","key":"2"}),
    createElement(Path, {"d":"M15 12L15 9L18 9","key":"3"}),
    createElement(Path, {"d":"M7 7L11 11","key":"4"}),
    createElement(Path, {"d":"M9 15L13 19","key":"5"}),
    createElement(Path, {"d":"M15 9L19 13","key":"6"})
  );
});

ArrowConvergeUpLeftCircle.displayName = 'ArrowConvergeUpLeftCircle';

export default ArrowConvergeUpLeftCircle;
export { ArrowConvergeUpLeftCircle };
