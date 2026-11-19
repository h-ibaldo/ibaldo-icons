import { createElement, forwardRef } from 'react';
import Svg, { Circle, Polyline } from 'react-native-svg';

const Clock = forwardRef(function Clock(
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
    createElement(Circle, {"cx":"12","cy":"11.999999999887223","r":"10","key":"0"}),
    createElement(Polyline, {"points":"12 6.999999999887223 12 11.999999999887223 17 11.999999999887223","key":"1"})
  );
});

Clock.displayName = 'Clock';

export default Clock;
export { Clock };
