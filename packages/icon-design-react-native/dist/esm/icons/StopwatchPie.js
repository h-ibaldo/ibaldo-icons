import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const StopwatchPie = forwardRef(function StopwatchPie(
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
    createElement(Path, {"d":"M20 14C20 18.418 16.418 22 12 22C7.582 22 4 18.418 4 14C4 9.582 7.582 6 12 6C16.418 6 20 9.582 20 14Z","key":"0"}),
    createElement(Path, {"d":"M5 5L3 7","key":"1"}),
    createElement(Path, {"d":"M19 5L21 7","key":"2"}),
    createElement(Path, {"d":"M10 3L14 3","key":"3"}),
    createElement(Path, {"d":"M12 3L12 6","key":"4"}),
    createElement(Path, {"d":"M12 9C14.762 9 17 11.238 17 14","key":"5"}),
    createElement(Path, {"d":"M12 9L12 14L17 14","key":"6"})
  );
});

StopwatchPie.displayName = 'StopwatchPie';

export default StopwatchPie;
export { StopwatchPie };
