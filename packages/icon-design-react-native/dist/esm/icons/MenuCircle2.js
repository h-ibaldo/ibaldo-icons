import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const MenuCircle2 = forwardRef(function MenuCircle2(
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
    createElement(Circle, {"cx":"12.000000004889444","cy":"11.999999995256076","r":"10","key":"0"}),
    createElement(Line, {"x1":"8.000000004889444","y1":"7.999999995256076","x2":"16.000000004889444","y2":"7.999999995256076","key":"1"}),
    createElement(Line, {"x1":"8.000000004889444","y1":"11.999999995256076","x2":"16.000000004889444","y2":"11.999999995256076","key":"2"}),
    createElement(Line, {"x1":"8.000000004889444","y1":"15.999999995256076","x2":"16.000000004889444","y2":"15.999999995256076","key":"3"})
  );
});

MenuCircle2.displayName = 'MenuCircle2';

export default MenuCircle2;
export { MenuCircle2 };
