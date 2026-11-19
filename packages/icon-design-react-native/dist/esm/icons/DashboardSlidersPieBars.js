import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const DashboardSlidersPieBars = forwardRef(function DashboardSlidersPieBars(
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
    createElement(Path, {"d":"M22 7C22 4.238 19.762 2 17 2C14.238 2 12 4.238 12 7C12 9.762 14.238 12 17 12C19.762 12 22 9.762 22 7Z","key":"0"}),
    createElement(Path, {"d":"M17 2L17 7L22 7","key":"1"}),
    createElement(Path, {"d":"M8 3L8 11","key":"2"}),
    createElement(Path, {"d":"M3 3L3 11","key":"3"}),
    createElement(Path, {"d":"M8 7C8.555 7 9 6.555 9 6C9 5.445 8.555 5 8 5C7.445 5 7 5.445 7 6C7 6.555 7.445 7 8 7Z","key":"4"}),
    createElement(Path, {"d":"M3 9C3.555 9 4 8.555 4 8C4 7.445 3.555 7 3 7C2.445 7 2 7.445 2 8C2 8.555 2.445 9 3 9Z","key":"5"}),
    createElement(Path, {"d":"M2 22L2 18","key":"6"}),
    createElement(Path, {"d":"M6 22L6 15","key":"7"}),
    createElement(Path, {"d":"M10 22L10 18","key":"8"}),
    createElement(Path, {"d":"M14 22L14 15","key":"9"}),
    createElement(Path, {"d":"M18 22L18 18","key":"10"}),
    createElement(Path, {"d":"M22 22L22 15","key":"11"})
  );
});

DashboardSlidersPieBars.displayName = 'DashboardSlidersPieBars';

export default DashboardSlidersPieBars;
export { DashboardSlidersPieBars };
