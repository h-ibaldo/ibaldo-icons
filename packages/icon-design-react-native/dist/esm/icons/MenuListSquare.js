import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const MenuListSquare = forwardRef(function MenuListSquare(
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
    createElement(Rect, {"x":"2.000000004900357","y":"1.999999995256076","width":"20","height":"20","rx":"3","ry":"3","key":"0"}),
    createElement(Line, {"x1":"9.000000004900357","y1":"9.999999995256076","x2":"11.000000004900357","y2":"9.999999995256076","key":"1"}),
    createElement(Line, {"x1":"9.000000004900357","y1":"13.999999995256076","x2":"11.000000004900357","y2":"13.999999995256076","key":"2"}),
    createElement(Line, {"x1":"9.000000004900357","y1":"17.999999995256076","x2":"11.000000004900357","y2":"17.999999995256076","key":"3"}),
    createElement(Line, {"x1":"5.990000004900139","y1":"9.999999995256076","x2":"6.000000004900357","y2":"9.999999995256076","key":"4"}),
    createElement(Line, {"x1":"9.000000004900357","y1":"5.999999995256076","x2":"11.000000004900357","y2":"5.999999995256076","key":"5"}),
    createElement(Line, {"x1":"5.990000004900139","y1":"5.999999995256076","x2":"6.000000004900357","y2":"5.999999995256076","key":"6"}),
    createElement(Line, {"x1":"5.990000004900139","y1":"13.999999995256076","x2":"6.000000004900357","y2":"13.999999995256076","key":"7"}),
    createElement(Line, {"x1":"5.990000004900139","y1":"17.999999995256076","x2":"6.000000004900357","y2":"17.999999995256076","key":"8"})
  );
});

MenuListSquare.displayName = 'MenuListSquare';

export default MenuListSquare;
export { MenuListSquare };
