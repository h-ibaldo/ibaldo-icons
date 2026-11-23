import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ServerBars = forwardRef(function ServerBars(
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
    createElement(Path, {"d":"M3 5L21 5C21.551 5 22 5.449 22 6L22 18C22 18.551 21.551 19 21 19L3 19C2.449 19 2 18.551 2 18L2 6C2 5.449 2.449 5 3 5Z","key":"0"}),
    createElement(Path, {"d":"M10 8L10 16","key":"1"}),
    createElement(Path, {"d":"M14 8L14 16","key":"2"}),
    createElement(Path, {"d":"M18 8L18 16","key":"3"}),
    createElement(Path, {"d":"M6 16L6 16","key":"4"}),
    createElement(Path, {"d":"M6 13L6 13","key":"5"})
  );
});

ServerBars.displayName = 'ServerBars';

export default ServerBars;
export { ServerBars };
