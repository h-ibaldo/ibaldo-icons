import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PaperclipXLong = forwardRef(function PaperclipXLong(
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
    createElement(Path, {"d":"M15 8L6.828 17.172C5.723 18.277 5.723 20.066 6.828 21.172C7.934 22.277 9.723 22.277 10.828 21.172L20.551 10.449C22.484 8.516 22.484 5.383 20.551 3.449C18.617 1.516 15.484 1.516 13.551 3.449L5 13","key":"0"}),
    createElement(Path, {"d":"M6 6L2 2","key":"1"}),
    createElement(Path, {"d":"M6 2L2 6","key":"2"})
  );
});

PaperclipXLong.displayName = 'PaperclipXLong';

export default PaperclipXLong;
export { PaperclipXLong };
