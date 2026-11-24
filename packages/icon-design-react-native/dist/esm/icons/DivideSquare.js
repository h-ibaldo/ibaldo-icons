import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const DivideSquare = forwardRef(function DivideSquare(
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
    createElement(Path, {"d":"M13 7C13 7.555 12.551 8 12 8C11.449 8 11 7.555 11 7C11 6.445 11.449 6 12 6C12.551 6 13 6.445 13 7Z","key":"0"}),
    createElement(Path, {"d":"M13 17C13 17.555 12.551 18 12 18C11.449 18 11 17.555 11 17C11 16.445 11.449 16 12 16C12.551 16 13 16.445 13 17Z","key":"1"}),
    createElement(Path, {"d":"M6 12L18 12","key":"2"}),
    createElement(Path, {"d":"M5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 19C2 20.656 3.344 22 5 22Z","key":"3"})
  );
});

DivideSquare.displayName = 'DivideSquare';

export default DivideSquare;
export { DivideSquare };
