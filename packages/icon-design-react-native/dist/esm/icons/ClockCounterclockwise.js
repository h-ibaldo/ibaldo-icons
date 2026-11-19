import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ClockCounterclockwise = forwardRef(function ClockCounterclockwise(
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
    createElement(Path, {"d":"M4 2L4 6L8 6","key":"0"}),
    createElement(Path, {"d":"M4.016 6C5.84 3.574 8.73 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 11.316 2.07 10.645 2.199 10","key":"1"}),
    createElement(Path, {"d":"M12 7L12 12L17 12","key":"2"})
  );
});

ClockCounterclockwise.displayName = 'ClockCounterclockwise';

export default ClockCounterclockwise;
export { ClockCounterclockwise };
