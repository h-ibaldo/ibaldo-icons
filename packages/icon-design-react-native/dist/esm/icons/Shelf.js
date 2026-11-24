import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Shelf = forwardRef(function Shelf(
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
    createElement(Path, {"d":"M4 2L4 22","key":"0"}),
    createElement(Path, {"d":"M20 2L20 22","key":"1"}),
    createElement(Path, {"d":"M4 4L20 4","key":"2"}),
    createElement(Path, {"d":"M4 12L20 12","key":"3"}),
    createElement(Path, {"d":"M4 20L20 20","key":"4"})
  );
});

Shelf.displayName = 'Shelf';

export default Shelf;
export { Shelf };
