import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SquareStackPaperclip = forwardRef(function SquareStackPaperclip(
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
    createElement(Path, {"d":"M8 22C6.895 22 6 21.105 6 20L6 8C6 6.895 6.895 6 8 6L18 6C19.105 6 20 6.895 20 8L20 12","key":"0"}),
    createElement(Path, {"d":"M2 17L2 4C2 2.895 2.895 2 4 2L14 2","key":"1"}),
    createElement(Path, {"d":"M19 22L14 22C12.344 22 11 20.656 11 19C11 17.344 12.344 16 14 16L20.5 16C21.328 16 22 16.672 22 17.5C22 18.328 21.328 19 20.5 19L16 19","key":"2"})
  );
});

SquareStackPaperclip.displayName = 'SquareStackPaperclip';

export default SquareStackPaperclip;
export { SquareStackPaperclip };
