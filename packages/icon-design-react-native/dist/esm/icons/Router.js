import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Router = forwardRef(function Router(
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
    createElement(Path, {"d":"M2 15L22 15L22 21L2 21Z","key":"0"}),
    createElement(Path, {"d":"M19 18L18 18","key":"1"}),
    createElement(Path, {"d":"M15 18L14 18","key":"2"}),
    createElement(Path, {"d":"M11 18L10 18","key":"3"}),
    createElement(Path, {"d":"M3 5L12 15L21 5","key":"4"}),
    createElement(Path, {"d":"M10.691 9.113C11.469 8.332 12.738 8.332 13.52 9.113","key":"5"}),
    createElement(Path, {"d":"M8.898 7.113C10.668 5.344 13.539 5.344 15.309 7.113","key":"6"}),
    createElement(Path, {"d":"M7 5.113C9.82 2.297 14.387 2.297 17.207 5.113","key":"7"})
  );
});

Router.displayName = 'Router';

export default Router;
export { Router };
