import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const WindowListXPlain = forwardRef(function WindowListXPlain(
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
    createElement(Path, {"d":"M20.5 17L15.5 22","key":"0"}),
    createElement(Path, {"d":"M15.5 17L20.5 22","key":"1"}),
    createElement(Path, {"d":"M11 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 13","key":"2"}),
    createElement(Path, {"d":"M2 8L22 8","key":"3"}),
    createElement(Path, {"d":"M9 13L15 13","key":"4"}),
    createElement(Path, {"d":"M6 13L6 13","key":"5"}),
    createElement(Path, {"d":"M9 17L11 17","key":"6"}),
    createElement(Path, {"d":"M6 17L6 17","key":"7"})
  );
});

WindowListXPlain.displayName = 'WindowListXPlain';

export default WindowListXPlain;
export { WindowListXPlain };
