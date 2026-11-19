import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ClockPauseTop = forwardRef(function ClockPauseTop(
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
    createElement(Path, {"d":"M12 7L12 12L17 14","key":"0"}),
    createElement(Path, {"d":"M17 7L17 2","key":"1"}),
    createElement(Path, {"d":"M21 7L21 2","key":"2"}),
    createElement(Path, {"d":"M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12","key":"3"})
  );
});

ClockPauseTop.displayName = 'ClockPauseTop';

export default ClockPauseTop;
export { ClockPauseTop };
