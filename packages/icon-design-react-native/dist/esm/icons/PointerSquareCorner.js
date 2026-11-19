import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PointerSquareCorner = forwardRef(function PointerSquareCorner(
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
    createElement(Path, {"d":"M11 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 11","key":"0"}),
    createElement(Path, {"d":"M14.52 15.152L16.688 21.66C16.824 22.063 17.371 22.125 17.59 21.758L19.152 19.156L21.758 17.59C22.125 17.371 22.063 16.824 21.66 16.688L15.152 14.52C14.762 14.391 14.391 14.762 14.52 15.152Z","key":"1"})
  );
});

PointerSquareCorner.displayName = 'PointerSquareCorner';

export default PointerSquareCorner;
export { PointerSquareCorner };
