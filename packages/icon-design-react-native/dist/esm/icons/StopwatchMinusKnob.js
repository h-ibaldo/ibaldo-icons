import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const StopwatchMinusKnob = forwardRef(function StopwatchMinusKnob(
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
    createElement(Path, {"d":"M20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13C4 8.582 7.582 5 12 5C16.418 5 20 8.582 20 13Z","key":"0"}),
    createElement(Path, {"d":"M10 2L14 2","key":"1"}),
    createElement(Path, {"d":"M20 5L22 7","key":"2"}),
    createElement(Path, {"d":"M21 6L18.566 8.438","key":"3"}),
    createElement(Path, {"d":"M9 13L15 13","key":"4"})
  );
});

StopwatchMinusKnob.displayName = 'StopwatchMinusKnob';

export default StopwatchMinusKnob;
export { StopwatchMinusKnob };
