import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ClockSnoozeTop = forwardRef(function ClockSnoozeTop(
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
    createElement(Path, {"d":"M18 2L22 2L18 7L22 7","key":"0"}),
    createElement(Path, {"d":"M13 2.051C12.672 2.016 12.34 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12","key":"1"}),
    createElement(Path, {"d":"M12 7L12 12L17 14","key":"2"})
  );
});

ClockSnoozeTop.displayName = 'ClockSnoozeTop';

export default ClockSnoozeTop;
export { ClockSnoozeTop };
