import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const ChartPie2 = forwardRef(function ChartPie2(
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
    createElement(Circle, {"cx":"12.016630450973025","cy":"12.000000000480213","r":"10","key":"0"}),
    createElement(Line, {"x1":"12.016630450973025","y1":"12.000000000480213","x2":"19.087675372848025","y2":"4.928955078605213","key":"1"}),
    createElement(Line, {"x1":"20.016630450973025","y1":"18.000000000480213","x2":"12.016630450973025","y2":"12.000000000480213","key":"2"})
  );
});

ChartPie2.displayName = 'ChartPie2';

export default ChartPie2;
export { ChartPie2 };
