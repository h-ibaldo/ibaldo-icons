import { createElement, forwardRef } from 'react';
import Svg, { Rect } from 'react-native-svg';

const MenuGridSquares = forwardRef(function MenuGridSquares(
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
    createElement(Rect, {"x":"2.000000004889444","y":"1.999999995256076","width":"4","height":"4","key":"0"}),
    createElement(Rect, {"x":"10.000000004889444","y":"1.999999995256076","width":"4","height":"4","key":"1"}),
    createElement(Rect, {"x":"18.000000004889444","y":"1.999999995256076","width":"4","height":"4","key":"2"}),
    createElement(Rect, {"x":"2.000000004889444","y":"9.999999995256076","width":"4","height":"4","key":"3"}),
    createElement(Rect, {"x":"10.000000004889444","y":"9.999999995256076","width":"4","height":"4","key":"4"}),
    createElement(Rect, {"x":"18.000000004889444","y":"9.999999995256076","width":"4","height":"4","key":"5"}),
    createElement(Rect, {"x":"2.000000004889444","y":"17.999999995256076","width":"4","height":"4","key":"6"}),
    createElement(Rect, {"x":"10.000000004889444","y":"17.999999995256076","width":"4","height":"4","key":"7"}),
    createElement(Rect, {"x":"18.000000004889444","y":"17.999999995256076","width":"4","height":"4","key":"8"})
  );
});

MenuGridSquares.displayName = 'MenuGridSquares';

export default MenuGridSquares;
export { MenuGridSquares };
