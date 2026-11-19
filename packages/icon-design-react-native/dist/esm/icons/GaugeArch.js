import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const GaugeArch = forwardRef(function GaugeArch(
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
    createElement(Path, {"d":"M19 14L18 14","key":"0"}),
    createElement(Path, {"d":"M6 14L5 14","key":"1"}),
    createElement(Path, {"d":"M7.758 18.242L7.051 18.949","key":"2"}),
    createElement(Path, {"d":"M7.051 9.051L7.758 9.758","key":"3"}),
    createElement(Path, {"d":"M16.242 18.242L16.949 18.949","key":"4"}),
    createElement(Path, {"d":"M12 7L12 8","key":"5"}),
    createElement(Path, {"d":"M19.984 20C21.246 18.328 22 16.254 22 14C22 8.477 17.523 4 12 4C6.477 4 2 8.477 2 14C2 16.254 2.754 18.328 4.012 20","key":"6"}),
    createElement(Path, {"d":"M17 9L13 13","key":"7"}),
    createElement(Path, {"d":"M13 14C13 13.445 12.555 13 12 13C11.445 13 11 13.445 11 14C11 14.555 11.445 15 12 15C12.555 15 13 14.555 13 14Z","key":"8"})
  );
});

GaugeArch.displayName = 'GaugeArch';

export default GaugeArch;
export { GaugeArch };
