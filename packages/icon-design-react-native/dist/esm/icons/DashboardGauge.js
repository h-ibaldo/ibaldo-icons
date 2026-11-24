import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const DashboardGauge = forwardRef(function DashboardGauge(
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
    createElement(Path, {"d":"M15 7L12 12","key":"0"}),
    createElement(Path, {"d":"M13 12C13 11.445 12.555 11 12 11C11.445 11 11 11.445 11 12C11 12.555 11.445 13 12 13C12.555 13 13 12.555 13 12Z","key":"1"}),
    createElement(Path, {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12","key":"2"}),
    createElement(Path, {"d":"M10.934 6.105C8.129 6.609 6 9.051 6 12","key":"3"}),
    createElement(Path, {"d":"M18 12C18 11.434 17.914 10.891 17.77 10.367","key":"4"}),
    createElement(Path, {"d":"M18 17L18 21","key":"5"}),
    createElement(Path, {"d":"M22 17L22 21","key":"6"}),
    createElement(Path, {"d":"M10 21L14 21L14 17L10 17Z","key":"7"}),
    createElement(Path, {"d":"M2 21L6 21L6 17L2 17Z","key":"8"})
  );
});

DashboardGauge.displayName = 'DashboardGauge';

export default DashboardGauge;
export { DashboardGauge };
