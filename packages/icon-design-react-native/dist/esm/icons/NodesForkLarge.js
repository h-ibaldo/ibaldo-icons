import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Polyline } from 'react-native-svg';

const NodesForkLarge = forwardRef(function NodesForkLarge(
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
    createElement(Line, {"x1":"8","y1":"11.999999999998181","x2":"13","y2":"11.999999999998181","key":"1"}),
    createElement(Circle, {"cx":"19","cy":"4.999999999998181","r":"3","key":"2"}),
    createElement(Circle, {"cx":"19","cy":"18.999999999998181","r":"3","key":"3"}),
    createElement(Polyline, {"points":"17.05615234375 7.267822265617724 13 11.999999999998181 17.05615234375 16.732177734367724","key":"4"})
  );
});

NodesForkLarge.displayName = 'NodesForkLarge';

export default NodesForkLarge;
export { NodesForkLarge };
