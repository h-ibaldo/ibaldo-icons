import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Polyline } from 'react-native-svg';

const NodesFork = forwardRef(function NodesFork(
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
    createElement(Circle, {"cx":"4","cy":"11.999999999998181","r":"2","key":"0"}),
    createElement(Line, {"x1":"6","y1":"11.999999999998181","x2":"13","y2":"11.999999999998181","key":"1"}),
    createElement(Circle, {"cx":"20","cy":"3.999999999998181","r":"2","key":"2"}),
    createElement(Circle, {"cx":"20","cy":"19.999999999998181","r":"2","key":"3"}),
    createElement(Polyline, {"points":"18.6884765625 5.498901367188409 13 11.999999999998181 18.6884765625 18.501098632808862","key":"4"})
  );
});

NodesFork.displayName = 'NodesFork';

export default NodesFork;
export { NodesFork };
