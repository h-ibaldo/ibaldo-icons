import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const WindowLock = forwardRef(function WindowLock(
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
    createElement(Path, {"d":"M22 22L14 22L14 17L22 17Z","key":"0"}),
    createElement(Path, {"d":"M15 17L15 15C15 13.344 16.344 12 18 12C19.656 12 21 13.344 21 15L21 17","key":"1"}),
    createElement(Path, {"d":"M10 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 9","key":"2"}),
    createElement(Path, {"d":"M2 8L22 8","key":"3"}),
    createElement(Path, {"d":"M5 5L5 5","key":"4"}),
    createElement(Path, {"d":"M8 5L8 5","key":"5"}),
    createElement(Path, {"d":"M11 5L11 5","key":"6"})
  );
});

WindowLock.displayName = 'WindowLock';

export default WindowLock;
export { WindowLock };
