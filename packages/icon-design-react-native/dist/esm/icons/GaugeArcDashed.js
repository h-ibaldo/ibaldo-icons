import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const GaugeArcDashed = forwardRef(function GaugeArcDashed(
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
    createElement(Path, {"d":"M7.207 20.777C8.633 21.555 10.266 22 12 22C13.945 22 15.758 21.434 17.293 20.473","key":"0"}),
    createElement(Path, {"d":"M2.031 12.617C2.148 14.535 2.801 16.309 3.852 17.781","key":"1"}),
    createElement(Path, {"d":"M20.473 17.293C21.438 15.758 22 13.945 22 12C22 7.254 18.688 3.285 14.25 2.266","key":"2"}),
    createElement(Path, {"d":"M9.75 2.266C9.176 2.395 8.617 2.57 8.086 2.797","key":"3"}),
    createElement(Path, {"d":"M4.457 5.449C3.754 6.258 3.176 7.176 2.762 8.18","key":"4"}),
    createElement(Path, {"d":"M15 7L12 12","key":"5"}),
    createElement(Path, {"d":"M13 12C13 11.445 12.551 11 12 11C11.449 11 11 11.445 11 12C11 12.555 11.449 13 12 13C12.551 13 13 12.555 13 12Z","key":"6"}),
    createElement(Path, {"d":"M10.934 6.105C8.129 6.609 6 9.051 6 12","key":"7"}),
    createElement(Path, {"d":"M18 12C18 11.434 17.918 10.891 17.77 10.367","key":"8"})
  );
});

GaugeArcDashed.displayName = 'GaugeArcDashed';

export default GaugeArcDashed;
export { GaugeArcDashed };
