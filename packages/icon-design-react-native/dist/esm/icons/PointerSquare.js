import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PointerSquare = forwardRef(function PointerSquare(
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
    createElement(Path, {"d":"M8.031 8.805L10.684 16.758C10.848 17.254 11.52 17.328 11.789 16.879L13.695 13.699L16.879 11.785C17.328 11.52 17.254 10.848 16.758 10.684L8.805 8.031C8.328 7.871 7.875 8.328 8.031 8.805Z","key":"0"}),
    createElement(Path, {"d":"M5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 19C2 20.656 3.344 22 5 22Z","key":"1"})
  );
});

PointerSquare.displayName = 'PointerSquare';

export default PointerSquare;
export { PointerSquare };
