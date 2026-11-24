import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Polyline } from 'react-native-svg';

const ChecklistCircleTop = forwardRef(function ChecklistCircleTop(
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
    createElement(Circle, {"cx":"3.949462885140747","cy":"12.000000000480213","r":"2","key":"0"}),
    createElement(Circle, {"cx":"3.949462885140747","cy":"20.000000000480213","r":"2","key":"1"}),
    createElement(Line, {"x1":"10.949462885140747","y1":"4.000000000480213","x2":"21.949462885140747","y2":"4.000000000480213","key":"2"}),
    createElement(Line, {"x1":"10.949462885140747","y1":"12.000000000480213","x2":"21.949462885140747","y2":"12.000000000480213","key":"3"}),
    createElement(Line, {"x1":"10.949462885140747","y1":"20.000000000480213","x2":"21.949462885140747","y2":"20.000000000480213","key":"4"}),
    createElement(Polyline, {"points":"1.949462885140747 4.000000000480213 3.949462885140747 6.000000000480213 6.949462885140747 2.000000000480213","key":"5"})
  );
});

ChecklistCircleTop.displayName = 'ChecklistCircleTop';

export default ChecklistCircleTop;
export { ChecklistCircleTop };
