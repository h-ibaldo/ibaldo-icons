import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const GaugeTeardropArch = forwardRef(function GaugeTeardropArch(
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
    createElement(Path, {"d":"M12 11.457L10.281 16.613C10.105 17.145 10.184 17.727 10.492 18.191C11.211 19.27 12.789 19.27 13.508 18.191C13.816 17.727 13.895 17.145 13.719 16.613Z","key":"0"}),
    createElement(Path, {"d":"M19.984 20C21.246 18.328 22 16.254 22 14C22 8.477 17.523 4 12 4C6.477 4 2 8.477 2 14C2 16.254 2.754 18.328 4.012 20","key":"1"}),
    createElement(Path, {"d":"M19 14L18 14","key":"2"}),
    createElement(Path, {"d":"M6 14L5 14","key":"3"}),
    createElement(Path, {"d":"M12 7L12 8","key":"4"}),
    createElement(Path, {"d":"M7.051 9.051L7.758 9.758","key":"5"}),
    createElement(Path, {"d":"M16.949 9.051L16.242 9.758","key":"6"})
  );
});

GaugeTeardropArch.displayName = 'GaugeTeardropArch';

export default GaugeTeardropArch;
export { GaugeTeardropArch };
