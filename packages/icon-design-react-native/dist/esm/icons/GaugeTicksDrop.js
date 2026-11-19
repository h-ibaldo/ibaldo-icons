import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const GaugeTicksDrop = forwardRef(function GaugeTicksDrop(
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
    createElement(Path, {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement(Path, {"d":"M12 2L12 5","key":"1"}),
    createElement(Path, {"d":"M12 19L12 22","key":"2"}),
    createElement(Path, {"d":"M22 12L19 12","key":"3"}),
    createElement(Path, {"d":"M5 12L2 12","key":"4"}),
    createElement(Path, {"d":"M12 8L9.863 11.563C9.34 12.434 9.398 13.531 10.008 14.34C11.004 15.672 12.996 15.672 13.992 14.34C14.602 13.531 14.66 12.434 14.137 11.563Z","key":"5"})
  );
});

GaugeTicksDrop.displayName = 'GaugeTicksDrop';

export default GaugeTicksDrop;
export { GaugeTicksDrop };
