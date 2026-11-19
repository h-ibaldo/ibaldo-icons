import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Polyline, Rect } from 'react-native-svg';

const MonitorArrowRight = forwardRef(function MonitorArrowRight(
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
    createElement(Line, {"x1":"7.000000003159585","y1":"21.998782736171052","x2":"17.000000003159585","y2":"21.998782736171052","key":"0"}),
    createElement(Line, {"x1":"16.000000003159585","y1":"7.998782736171052","x2":"8.000000003159585","y2":"7.998782736171052","key":"1"}),
    createElement(Line, {"x1":"22.000000003159585","y1":"13.998782736171052","x2":"2.000000003159585","y2":"13.998782736171052","key":"2"}),
    createElement(Polyline, {"points":"14.000000003159585 5.998782736171052 16.000000003159585 7.998782736171052 14.000000003159585 9.998782736171052","key":"3"}),
    createElement(Rect, {"x":"2.000000003159585","y":"1.998782736172871","width":"20","height":"14.999999999998181","rx":"2","ry":"2","key":"4"}),
    createElement(Path, {"d":"M8.000000003159585,21.998782736171052c1.380711874500776,0,2.5-1.119288125497405,2.5-2.5","key":"5"}),
    createElement(Path, {"d":"M16.000000003159585,21.998782736116482c-1.380711874499866.000000000061846-2.500000000049113-1.119288125388266-2.500000000109139-2.499999999890861","key":"6"})
  );
});

MonitorArrowRight.displayName = 'MonitorArrowRight';

export default MonitorArrowRight;
export { MonitorArrowRight };
