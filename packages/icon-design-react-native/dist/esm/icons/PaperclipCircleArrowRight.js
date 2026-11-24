import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PaperclipCircleArrowRight = forwardRef(function PaperclipCircleArrowRight(
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
    createElement(Path, {"d":"M6 6L8 4L6 2","key":"0"}),
    createElement(Path, {"d":"M2 4L8 4","key":"1"}),
    createElement(Path, {"d":"M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 10.953 2.16 9.945 2.461 9","key":"2"}),
    createElement(Path, {"d":"M13.75 10.25L12.246 11.754C11.695 12.305 11.695 13.195 12.246 13.746L12.254 13.754C12.805 14.305 13.695 14.305 14.246 13.754L16.75 11.25C17.855 10.145 17.855 8.355 16.75 7.25C15.645 6.145 13.855 6.145 12.75 7.25L7.25 12.75C6.145 13.855 6.145 15.645 7.25 16.75C8.355 17.855 10.145 17.855 11.25 16.75","key":"3"})
  );
});

PaperclipCircleArrowRight.displayName = 'PaperclipCircleArrowRight';

export default PaperclipCircleArrowRight;
export { PaperclipCircleArrowRight };
