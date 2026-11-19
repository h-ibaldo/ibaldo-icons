import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline, Rect } from 'react-native-svg';

const SidebarArrowRight = forwardRef(function SidebarArrowRight(
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
    createElement(Line, {"x1":"17.050502324515037","y1":"6.99756203627021","x2":"19.050687067227045","y2":"6.99756203591005","key":"0"}),
    createElement(Line, {"x1":"17.050502324686022","y1":"9.99756203627021","x2":"19.050687067385297","y2":"9.99756203591005","key":"1"}),
    createElement(Line, {"x1":"17.050502324846093","y1":"12.99756203627021","x2":"19.050687067545368","y2":"12.99756203591005","key":"2"}),
    createElement(Rect, {"x":"2.050537047700345","y":"2.997627984182145","width":"20","height":"17.999993765783074","rx":"1.999999999999558","ry":"1.999999999999558","key":"3"}),
    createElement(Line, {"x1":"14.05053704693637","y1":"2.997627983887469","x2":"14.05053704846614","y2":"20.997621749672362","key":"4"}),
    createElement(Line, {"x1":"2.050502320205851","y1":"11.997562037932767","x2":"10.050502320205851","y2":"11.997562037303396","key":"5"}),
    createElement(Polyline, {"points":"7.050502319936641 8.997562037572607 10.050502320205851 11.997562037303396 7.05050232047688 14.997562037572607","key":"6"})
  );
});

SidebarArrowRight.displayName = 'SidebarArrowRight';

export default SidebarArrowRight;
export { SidebarArrowRight };
