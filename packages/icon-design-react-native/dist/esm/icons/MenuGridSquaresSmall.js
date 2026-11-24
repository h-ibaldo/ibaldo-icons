import { createElement, forwardRef } from 'react';
import Svg, { Rect } from 'react-native-svg';

const MenuGridSquaresSmall = forwardRef(function MenuGridSquaresSmall(
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
    createElement(Rect, {"x":"4.000000004889444","y":"3.999999995256076","width":"2","height":"2","key":"0"}),
    createElement(Rect, {"x":"11.000000004889444","y":"3.999999995256076","width":"2","height":"2","key":"1"}),
    createElement(Rect, {"x":"18.000000004889444","y":"3.999999995256076","width":"2","height":"2","key":"2"}),
    createElement(Rect, {"x":"4.000000004889444","y":"10.999999995256076","width":"2","height":"2","key":"3"}),
    createElement(Rect, {"x":"11.000000004889444","y":"10.999999995256076","width":"2","height":"2","key":"4"}),
    createElement(Rect, {"x":"18.000000004889444","y":"10.999999995256076","width":"2","height":"2","key":"5"}),
    createElement(Rect, {"x":"4.000000004889444","y":"17.999999995256076","width":"2","height":"2","key":"6"}),
    createElement(Rect, {"x":"11.000000004889444","y":"17.999999995256076","width":"2","height":"2","key":"7"}),
    createElement(Rect, {"x":"18.000000004889444","y":"17.999999995256076","width":"2","height":"2","key":"8"})
  );
});

MenuGridSquaresSmall.displayName = 'MenuGridSquaresSmall';

export default MenuGridSquaresSmall;
export { MenuGridSquaresSmall };
