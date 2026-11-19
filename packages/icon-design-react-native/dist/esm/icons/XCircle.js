import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const XCircle = forwardRef(function XCircle(
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
    createElement(Circle, {"cx":"11.999999990790457","cy":"12.000000000897671","r":"10","key":"0"}),
    createElement(Line, {"x1":"8.999999990919605","y1":"15.000000000763976","x2":"14.999999990650394","y2":"9.000000001032276","key":"1"}),
    createElement(Line, {"x1":"14.999999990519427","y1":"15.000000000894943","x2":"8.999999991059667","y2":"9.000000000897671","key":"2"})
  );
});

XCircle.displayName = 'XCircle';

export default XCircle;
export { XCircle };
