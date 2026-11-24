import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ClockCounterclockwiseBottom = forwardRef(function ClockCounterclockwiseBottom(
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
    createElement(Path, {"d":"M20 22L20 18L16 18","key":"0"}),
    createElement(Path, {"d":"M19.984 18C18.16 20.426 15.27 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 12.684 21.93 13.355 21.801 14","key":"1"}),
    createElement(Path, {"d":"M12 7L12 12L17 12","key":"2"})
  );
});

ClockCounterclockwiseBottom.displayName = 'ClockCounterclockwiseBottom';

export default ClockCounterclockwiseBottom;
export { ClockCounterclockwiseBottom };
