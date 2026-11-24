import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SprayCanLines = forwardRef(function SprayCanLines(
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
    createElement(Path, {"d":"M2 22L2 12C2 10.344 3.344 9 5 9L8 9C9.656 9 11 10.344 11 12L11 22","key":"0"}),
    createElement(Path, {"d":"M5 9L5 6L8 6L8 9","key":"1"}),
    createElement(Path, {"d":"M2 13L11 13","key":"2"}),
    createElement(Path, {"d":"M13 7L22 7","key":"3"}),
    createElement(Path, {"d":"M15 10L22 12","key":"4"}),
    createElement(Path, {"d":"M15 4L22 2","key":"5"})
  );
});

SprayCanLines.displayName = 'SprayCanLines';

export default SprayCanLines;
export { SprayCanLines };
