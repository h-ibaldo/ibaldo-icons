import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDownFromDotCircle = forwardRef(function ArrowDownFromDotCircle(
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
    createElement(Path, {"d":"M15 14L12 17L9 14","key":"0"}),
    createElement(Path, {"d":"M12 10L12 17","key":"1"}),
    createElement(Path, {"d":"M10 4C10 5.105 10.895 6 12 6C13.105 6 14 5.105 14 4C14 2.895 13.105 2 12 2C10.895 2 10 2.895 10 4Z","key":"2"}),
    createElement(Path, {"d":"M6 4.016C3.574 5.84 2 8.73 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 8.73 20.426 5.84 18 4.016","key":"3"})
  );
});

ArrowDownFromDotCircle.displayName = 'ArrowDownFromDotCircle';

export default ArrowDownFromDotCircle;
export { ArrowDownFromDotCircle };
