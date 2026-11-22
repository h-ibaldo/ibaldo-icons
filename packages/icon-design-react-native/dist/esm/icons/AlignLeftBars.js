import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const AlignLeftBars = forwardRef(function AlignLeftBars(
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
    createElement(Path, {"d":"M2 9L2 7C2 6.449 2.449 6 3 6L21 6C21.551 6 22 6.449 22 7L22 9C22 9.551 21.551 10 21 10L3 10C2.449 10 2 9.551 2 9Z","key":"0"}),
    createElement(Path, {"d":"M11 2L2 2","key":"1"}),
    createElement(Path, {"d":"M2 21L2 19C2 18.449 2.449 18 3 18L21 18C21.551 18 22 18.449 22 19L22 21C22 21.551 21.551 22 21 22L3 22C2.449 22 2 21.551 2 21Z","key":"2"}),
    createElement(Path, {"d":"M11 14L2 14","key":"3"})
  );
});

AlignLeftBars.displayName = 'AlignLeftBars';

export default AlignLeftBars;
export { AlignLeftBars };
