import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const RouterLock = forwardRef(function RouterLock(
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
    createElement(Path, {"d":"M2 16L22 16L22 22L2 22Z","key":"0"}),
    createElement(Path, {"d":"M19 19L18 19","key":"1"}),
    createElement(Path, {"d":"M15 19L14 19","key":"2"}),
    createElement(Path, {"d":"M11 19L10 19","key":"3"}),
    createElement(Path, {"d":"M3 6L12 16L14.301 13.445","key":"4"}),
    createElement(Path, {"d":"M19.746 7.395L21 6","key":"5"}),
    createElement(Path, {"d":"M17 6L11 6L11 11L17 11Z","key":"6"}),
    createElement(Path, {"d":"M14 2C12.676 2 11.602 3.074 11.602 4.398L11.602 6L16.398 6L16.398 4.398C16.398 3.074 15.324 2 14 2Z","key":"7"})
  );
});

RouterLock.displayName = 'RouterLock';

export default RouterLock;
export { RouterLock };
