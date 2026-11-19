import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const MenuPanel = forwardRef(function MenuPanel(
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
    createElement(Path, {"d":"M5.000000004900357,1.999999995256076h13c.552284749819592,0,1,.447715250171314,1,1v18c0,.552284749832324-.447715250180408,1-1,1H4.867867456059685","key":"0"}),
    createElement(Line, {"x1":"5.000000004900357","y1":"6.999999995256076","x2":"14.000000004900357","y2":"6.999999995256076","key":"1"}),
    createElement(Line, {"x1":"5.000000004900357","y1":"11.999999995256076","x2":"14.000000004900357","y2":"11.999999995256076","key":"2"}),
    createElement(Line, {"x1":"5.000000004900357","y1":"16.999999995256076","x2":"14.000000004900357","y2":"16.999999995256076","key":"3"})
  );
});

MenuPanel.displayName = 'MenuPanel';

export default MenuPanel;
export { MenuPanel };
