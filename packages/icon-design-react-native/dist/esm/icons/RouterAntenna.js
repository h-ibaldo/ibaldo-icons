import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const RouterAntenna = forwardRef(function RouterAntenna(
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
    createElement(Path, {"d":"M12 15L12 3","key":"0"}),
    createElement(Path, {"d":"M5 15L19 15C20.656 15 22 16.344 22 18C22 19.656 20.656 21 19 21L5 21C3.344 21 2 19.656 2 18C2 16.344 3.344 15 5 15Z","key":"1"}),
    createElement(Path, {"d":"M19 18L18 18","key":"2"}),
    createElement(Path, {"d":"M15 18L14 18","key":"3"}),
    createElement(Path, {"d":"M11 18L10 18","key":"4"}),
    createElement(Path, {"d":"M9.059 8.52C8.277 7.738 8.277 6.469 9.059 5.688","key":"5"}),
    createElement(Path, {"d":"M7.059 10.313C5.285 8.539 5.285 5.668 7.059 3.895","key":"6"}),
    createElement(Path, {"d":"M5.059 12.207C2.238 9.387 2.238 4.82 5.059 2","key":"7"}),
    createElement(Path, {"d":"M14.941 8.52C15.723 7.738 15.723 6.469 14.941 5.688","key":"8"}),
    createElement(Path, {"d":"M16.941 10.313C18.715 8.539 18.715 5.668 16.941 3.895","key":"9"}),
    createElement(Path, {"d":"M18.941 12.207C21.762 9.387 21.762 4.82 18.941 2","key":"10"})
  );
});

RouterAntenna.displayName = 'RouterAntenna';

export default RouterAntenna;
export { RouterAntenna };
