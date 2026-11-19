import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TrayLines = forwardRef(function TrayLines(
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
    createElement(Path, {"d":"M3 13L3 19C3 20.105 3.895 21 5 21L19 21C20.105 21 21 20.105 21 19L21 13","key":"0"}),
    createElement(Path, {"d":"M7 16L17 16","key":"1"}),
    createElement(Path, {"d":"M7 12L17 12","key":"2"}),
    createElement(Path, {"d":"M7 8L17 8","key":"3"}),
    createElement(Path, {"d":"M7 4L17 4","key":"4"})
  );
});

TrayLines.displayName = 'TrayLines';

export default TrayLines;
export { TrayLines };
