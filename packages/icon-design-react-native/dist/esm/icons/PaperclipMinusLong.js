import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PaperclipMinusLong = forwardRef(function PaperclipMinusLong(
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
    createElement(Path, {"d":"M14 9L7.828 16.172C6.723 17.277 6.723 19.066 7.828 20.172C8.934 21.277 10.723 21.277 11.828 20.172L19.551 11.449C21.484 9.516 21.484 6.383 19.551 4.449C17.617 2.516 14.484 2.516 12.551 4.449L6 12","key":"0"}),
    createElement(Path, {"d":"M3 4L8 4","key":"1"})
  );
});

PaperclipMinusLong.displayName = 'PaperclipMinusLong';

export default PaperclipMinusLong;
export { PaperclipMinusLong };
