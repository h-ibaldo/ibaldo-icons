import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PaperclipCircleCheckLong = forwardRef(function PaperclipCircleCheckLong(
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
    createElement(Path, {"d":"M21.797 14C21.93 13.355 22 12.684 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C12.684 22 13.355 21.93 14 21.801","key":"0"}),
    createElement(Path, {"d":"M17 19L19 21L22 18","key":"1"}),
    createElement(Path, {"d":"M16 12L12 16C10.895 17.105 9.105 17.105 8 16C6.895 14.895 6.895 13.105 8 12L13 7C13.555 6.449 14.445 6.449 15 7C15.555 7.551 15.555 8.449 15 9L11 13","key":"2"})
  );
});

PaperclipCircleCheckLong.displayName = 'PaperclipCircleCheckLong';

export default PaperclipCircleCheckLong;
export { PaperclipCircleCheckLong };
