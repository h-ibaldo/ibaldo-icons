import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ClockMinusTop = forwardRef(function ClockMinusTop(
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
    createElement(Path, {"d":"M22 5L17 5","key":"0"}),
    createElement(Path, {"d":"M13 2.051C12.672 2.016 12.34 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 11.664 21.98 11.328 21.949 11","key":"1"}),
    createElement(Path, {"d":"M12 7L12 12L17 14","key":"2"})
  );
});

ClockMinusTop.displayName = 'ClockMinusTop';

export default ClockMinusTop;
export { ClockMinusTop };
