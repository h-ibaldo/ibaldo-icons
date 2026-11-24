import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const GiftStriped = forwardRef(function GiftStriped(
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
    createElement(Path, {"d":"M3 13L21 13L21 21C21 21.551 20.551 22 20 22L4 22C3.449 22 3 21.551 3 21Z","key":"0"}),
    createElement(Path, {"d":"M3 13L21 13C21.551 13 22 12.551 22 12L22 9C22 8.449 21.551 8 21 8L3 8C2.449 8 2 8.449 2 9L2 12C2 12.551 2.449 13 3 13Z","key":"1"}),
    createElement(Path, {"d":"M12 22L21 13.898","key":"2"}),
    createElement(Path, {"d":"M16 13L6 22","key":"3"}),
    createElement(Path, {"d":"M10 13L3 19.301","key":"4"}),
    createElement(Path, {"d":"M11 8L5 5L9 2L12 8L17 2L20 5L14 8","key":"5"})
  );
});

GiftStriped.displayName = 'GiftStriped';

export default GiftStriped;
export { GiftStriped };
