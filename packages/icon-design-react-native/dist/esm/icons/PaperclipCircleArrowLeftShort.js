import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PaperclipCircleArrowLeftShort = forwardRef(function PaperclipCircleArrowLeftShort(
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
    createElement(Path, {"d":"M18 18L16 20L18 22","key":"0"}),
    createElement(Path, {"d":"M22 20L16 20","key":"1"}),
    createElement(Path, {"d":"M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 13.047 21.84 14.055 21.539 15","key":"2"}),
    createElement(Path, {"d":"M11.5 13.5L15.379 9.621C16.207 8.793 16.207 7.449 15.379 6.621C14.551 5.793 13.207 5.793 12.379 6.621L7.676 11.324C6.293 12.707 6.293 14.945 7.676 16.324C9.055 17.707 11.293 17.707 12.676 16.324L16 13","key":"3"})
  );
});

PaperclipCircleArrowLeftShort.displayName = 'PaperclipCircleArrowLeftShort';

export default PaperclipCircleArrowLeftShort;
export { PaperclipCircleArrowLeftShort };
