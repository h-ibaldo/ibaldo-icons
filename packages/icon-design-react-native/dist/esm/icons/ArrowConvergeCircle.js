import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowConvergeCircle = forwardRef(function ArrowConvergeCircle(
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
    createElement(Path, {"d":"M16 10L14 12L16 14","key":"0"}),
    createElement(Path, {"d":"M22 12L14 12","key":"1"}),
    createElement(Path, {"d":"M8 10L10 12L8 14","key":"2"}),
    createElement(Path, {"d":"M2 12L10 12","key":"3"}),
    createElement(Path, {"d":"M3.348 17C5.078 19.984 8.301 22 12 22C15.699 22 18.922 19.984 20.652 17","key":"4"}),
    createElement(Path, {"d":"M20.652 7C18.922 4.016 15.699 2 12 2C8.301 2 5.078 4.016 3.348 7","key":"5"})
  );
});

ArrowConvergeCircle.displayName = 'ArrowConvergeCircle';

export default ArrowConvergeCircle;
export { ArrowConvergeCircle };
