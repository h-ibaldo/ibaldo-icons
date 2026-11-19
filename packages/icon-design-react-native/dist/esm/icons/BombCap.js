import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BombCap = forwardRef(function BombCap(
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
    createElement(Path, {"d":"M21 2L17 6","key":"0"}),
    createElement(Path, {"d":"M17 2L21 6","key":"1"}),
    createElement(Path, {"d":"M14 4L13 4C11.344 4 10 5.344 10 7L10 8","key":"2"}),
    createElement(Path, {"d":"M12 10.348L12 9C12 8.449 11.551 8 11 8L9 8C8.449 8 8 8.449 8 9L8 10.348C5.313 11.301 3.5 14.105 4.121 17.234C4.578 19.523 6.418 21.387 8.703 21.863C12.586 22.676 16 19.738 16 16C16 13.391 14.328 11.172 12 10.348Z","key":"3"})
  );
});

BombCap.displayName = 'BombCap';

export default BombCap;
export { BombCap };
