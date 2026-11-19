import { createElement, forwardRef } from 'react';
import Svg, { Circle, Polyline } from 'react-native-svg';

const CheckCircle = forwardRef(function CheckCircle(
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
    createElement(Circle, {"cx":"11.949462885140747","cy":"12.000000000480213","r":"10","key":"0"}),
    createElement(Polyline, {"points":"7.949462885140747 12.000000000480213 10.949462885140747 15.000000000480213 15.949462885140747 9.000000000480213","key":"1"})
  );
});

CheckCircle.displayName = 'CheckCircle';

export default CheckCircle;
export { CheckCircle };
