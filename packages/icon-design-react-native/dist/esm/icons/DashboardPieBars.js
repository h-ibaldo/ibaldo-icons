import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const DashboardPieBars = forwardRef(function DashboardPieBars(
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
    createElement(Path, {"d":"M12 7C12 4.238 9.762 2 7 2C4.238 2 2 4.238 2 7C2 9.762 4.238 12 7 12C9.762 12 12 9.762 12 7Z","key":"0"}),
    createElement(Path, {"d":"M7 2L7 7L12 7","key":"1"}),
    createElement(Path, {"d":"M6 18L2 18L2 22L6 22Z","key":"2"}),
    createElement(Path, {"d":"M10 16L6 16L6 22L10 22Z","key":"3"}),
    createElement(Path, {"d":"M14 18L10 18L10 22L14 22Z","key":"4"}),
    createElement(Path, {"d":"M18 13L14 13L14 22L18 22Z","key":"5"}),
    createElement(Path, {"d":"M22 6L18 6L18 22L22 22Z","key":"6"})
  );
});

DashboardPieBars.displayName = 'DashboardPieBars';

export default DashboardPieBars;
export { DashboardPieBars };
