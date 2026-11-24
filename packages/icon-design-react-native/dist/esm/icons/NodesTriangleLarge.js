import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const NodesTriangleLarge = forwardRef(function NodesTriangleLarge(
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
    createElement(Circle, {"cx":"5","cy":"11.999999999998181","r":"3","key":"0"}),
    createElement(Circle, {"cx":"19","cy":"4.999999999998181","r":"3","key":"1"}),
    createElement(Circle, {"cx":"19","cy":"18.999999999998181","r":"3","key":"2"}),
    createElement(Line, {"x1":"7.6728515625","y1":"13.336425781248181","x2":"16.3271484375","y2":"17.663574218748181","key":"3"}),
    createElement(Line, {"x1":"16.3271484375","y1":"6.336425781248181","x2":"7.6728515625","y2":"10.663574218748181","key":"4"}),
    createElement(Line, {"x1":"19","y1":"7.999999999998181","x2":"19","y2":"15.999999999998181","key":"5"})
  );
});

NodesTriangleLarge.displayName = 'NodesTriangleLarge';

export default NodesTriangleLarge;
export { NodesTriangleLarge };
