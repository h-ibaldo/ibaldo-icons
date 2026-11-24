import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PointerUpRightSquare = forwardRef(function PointerUpRightSquare(
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
    createElement(Path, {"d":"M15.969 8.805L13.316 16.758C13.152 17.254 12.48 17.328 12.211 16.879L10.305 13.699L7.121 11.785C6.672 11.52 6.746 10.848 7.242 10.684L15.195 8.031C15.672 7.871 16.125 8.328 15.969 8.805Z","key":"0"}),
    createElement(Path, {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"1"})
  );
});

PointerUpRightSquare.displayName = 'PointerUpRightSquare';

export default PointerUpRightSquare;
export { PointerUpRightSquare };
