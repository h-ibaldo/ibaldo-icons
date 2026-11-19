import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SquareStackPaperclipTilted = forwardRef(function SquareStackPaperclipTilted(
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
    createElement(Path, {"d":"M20 22L8 22C6.895 22 6 21.105 6 20L6 8C6 6.895 6.895 6 8 6L20 6C21.105 6 22 6.895 22 8L22 20C22 21.105 21.105 22 20 22Z","key":"0"}),
    createElement(Path, {"d":"M2 17L2 4C2 2.895 2.895 2 4 2L17 2","key":"1"}),
    createElement(Path, {"d":"M18 15L14.828 18.172C13.723 19.277 11.934 19.277 10.828 18.172C9.723 17.066 9.723 15.277 10.828 14.172L15.586 9.414C16.137 8.863 17.035 8.863 17.586 9.414C18.137 9.965 18.137 10.863 17.586 11.414L13.828 15.172","key":"2"})
  );
});

SquareStackPaperclipTilted.displayName = 'SquareStackPaperclipTilted';

export default SquareStackPaperclipTilted;
export { SquareStackPaperclipTilted };
