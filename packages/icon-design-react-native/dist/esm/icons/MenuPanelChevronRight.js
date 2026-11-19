import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Polyline } from 'react-native-svg';

const MenuPanelChevronRight = forwardRef(function MenuPanelChevronRight(
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
    createElement(Path, {"d":"M2.132132553721021,1.999999995256076h10.867867451179336c.552284749819592,0,1,.447715250171314,1,1v18c0,.552284749832324-.447715250180408,1-1,1H2.000000004900357","key":"0"}),
    createElement(Line, {"x1":"2.132132553721021","y1":"6.999999995256076","x2":"9.000000004900357","y2":"6.999999995256076","key":"1"}),
    createElement(Line, {"x1":"2.132132553721021","y1":"11.999999995256076","x2":"9.000000004900357","y2":"11.999999995256076","key":"2"}),
    createElement(Line, {"x1":"2.132132553721021","y1":"16.999999995256076","x2":"9.000000004900357","y2":"16.999999995256076","key":"3"}),
    createElement(Polyline, {"points":"19.000000004900357 8.999999995256076 22.000000004900357 11.999999995256076 19.000000004900357 14.999999995256076","key":"4"})
  );
});

MenuPanelChevronRight.displayName = 'MenuPanelChevronRight';

export default MenuPanelChevronRight;
export { MenuPanelChevronRight };
