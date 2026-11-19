import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowLeftFromPointCircle = forwardRef(function ArrowLeftFromPointCircle(
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
    createElement(Path, {"d":"M12 9L9 12L12 15","key":"0"}),
    createElement(Path, {"d":"M18 12L9 12","key":"1"}),
    createElement(Path, {"d":"M22 12L22 12","key":"2"}),
    createElement(Path, {"d":"M19.117 5C17.305 3.152 14.793 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C14.793 22 17.305 20.848 19.117 19","key":"3"})
  );
});

ArrowLeftFromPointCircle.displayName = 'ArrowLeftFromPointCircle';

export default ArrowLeftFromPointCircle;
export { ArrowLeftFromPointCircle };
