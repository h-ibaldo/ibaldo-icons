import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SquareStackLines = forwardRef(function SquareStackLines(
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
    createElement(Path, {"d":"M22 7L22 17","key":"0"}),
    createElement(Path, {"d":"M17 7L17 17","key":"1"}),
    createElement(Path, {"d":"M12 7L12 17","key":"2"}),
    createElement(Path, {"d":"M17 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L17 2","key":"3"})
  );
});

SquareStackLines.displayName = 'SquareStackLines';

export default SquareStackLines;
export { SquareStackLines };
