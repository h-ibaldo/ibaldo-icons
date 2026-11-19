import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const DashboardPieTrendUp = forwardRef(function DashboardPieTrendUp(
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
    createElement(Path, {"d":"M14 8C14 4.688 11.313 2 8 2C4.688 2 2 4.688 2 8C2 11.313 4.688 14 8 14C11.313 14 14 11.313 14 8Z","key":"0"}),
    createElement(Path, {"d":"M8 2L8 8L14 8","key":"1"}),
    createElement(Path, {"d":"M18 3L22 3","key":"2"}),
    createElement(Path, {"d":"M18 7L22 7","key":"3"}),
    createElement(Path, {"d":"M18 11L22 11","key":"4"}),
    createElement(Path, {"d":"M3 22L9 18L16 22L22 16","key":"5"}),
    createElement(Path, {"d":"M18 16L22 16L22 20","key":"6"})
  );
});

DashboardPieTrendUp.displayName = 'DashboardPieTrendUp';

export default DashboardPieTrendUp;
export { DashboardPieTrendUp };
