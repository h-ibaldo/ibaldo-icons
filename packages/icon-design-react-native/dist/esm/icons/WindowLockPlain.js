import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const WindowLockPlain = forwardRef(function WindowLockPlain(
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
    createElement(Path, {"d":"M10 21.922L5 21.922C3.344 21.922 2 20.582 2 18.922L2 4.922C2 3.266 3.344 1.922 5 1.922L19 1.922C20.656 1.922 22 3.266 22 4.922L22 10","key":"2"}),
    createElement(Path, {"d":"M2 7.922L22 7.922","key":"3"})
  );
});

WindowLockPlain.displayName = 'WindowLockPlain';

export default WindowLockPlain;
export { WindowLockPlain };
