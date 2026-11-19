import { createElement, forwardRef } from 'react';
import Svg, { Circle, Polyline } from 'react-native-svg';

const CheckCircleCompact = forwardRef(function CheckCircleCompact(
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
    createElement(Circle, {"cx":"11.949462885140747","cy":"12.000000000480213","r":"8","key":"0"}),
    createElement(Polyline, {"points":"8.949462885140747 12.000000000480213 10.949462885140747 14.000000000480213 14.949462885140747 10.000000000480213","key":"1"})
  );
});

CheckCircleCompact.displayName = 'CheckCircleCompact';

export default CheckCircleCompact;
export { CheckCircleCompact };
