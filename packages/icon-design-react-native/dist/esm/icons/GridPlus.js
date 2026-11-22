import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const GridPlus = forwardRef(function GridPlus(
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
    createElement(Path, {"d":"M14 18L22 18","key":"0"}),
    createElement(Path, {"d":"M18 14L18 22","key":"1"}),
    createElement(Path, {"d":"M3 2L9 2C9.551 2 10 2.449 10 3L10 9C10 9.551 9.551 10 9 10L3 10C2.449 10 2 9.551 2 9L2 3C2 2.449 2.449 2 3 2Z","key":"2"}),
    createElement(Path, {"d":"M15 2L21 2C21.551 2 22 2.449 22 3L22 9C22 9.551 21.551 10 21 10L15 10C14.449 10 14 9.551 14 9L14 3C14 2.449 14.449 2 15 2Z","key":"3"}),
    createElement(Path, {"d":"M3 14L9 14C9.551 14 10 14.449 10 15L10 21C10 21.551 9.551 22 9 22L3 22C2.449 22 2 21.551 2 21L2 15C2 14.449 2.449 14 3 14Z","key":"4"})
  );
});

GridPlus.displayName = 'GridPlus';

export default GridPlus;
export { GridPlus };
