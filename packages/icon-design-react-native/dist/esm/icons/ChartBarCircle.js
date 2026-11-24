import { createElement, forwardRef } from 'react';
import Svg, { Circle, Rect } from 'react-native-svg';

const ChartBarCircle = forwardRef(function ChartBarCircle(
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
    createElement(Circle, {"cx":"11.974731440099276","cy":"12.000000003885361","r":"10","key":"0"}),
    createElement(Rect, {"x":"5.974731440099276","y":"11.000000003885361","width":"4","height":"4","key":"1"}),
    createElement(Rect, {"x":"9.974731440099276","y":"7.000000003885361","width":"4","height":"8","key":"2"}),
    createElement(Rect, {"x":"13.974731440099276","y":"9.000000003885361","width":"4","height":"6","key":"3"})
  );
});

ChartBarCircle.displayName = 'ChartBarCircle';

export default ChartBarCircle;
export { ChartBarCircle };
