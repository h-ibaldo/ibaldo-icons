import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline, Rect } from 'react-native-svg';

const Toolbox = forwardRef(function Toolbox(
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
    createElement(Rect, {"x":"2","y":"6.999999999998181","width":"20","height":"14","rx":"1","ry":"1","key":"0"}),
    createElement(Polyline, {"points":"8 6.999999999998181 8 2.999999999998181 16 2.999999999998181 16 6.999999999998181","key":"1"}),
    createElement(Line, {"x1":"2","y1":"11.999999999998181","x2":"22","y2":"11.999999999998181","key":"2"}),
    createElement(Polyline, {"points":"9 11.999999999998181 9 13.999999999998181 6 13.999999999998181 6 11.999999999998181","key":"3"}),
    createElement(Polyline, {"points":"18 11.999999999998181 18 13.999999999998181 15 13.999999999998181 15 11.999999999998181","key":"4"})
  );
});

Toolbox.displayName = 'Toolbox';

export default Toolbox;
export { Toolbox };
