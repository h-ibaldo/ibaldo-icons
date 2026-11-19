import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Polyline } from 'react-native-svg';

const CheckUnderlineCircle = forwardRef(function CheckUnderlineCircle(
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
    createElement(Circle, {"cx":"12.000000004471076","cy":"12.000000003885361","r":"10","key":"0"}),
    createElement(Line, {"x1":"8.000000004471076","y1":"16.000000003885361","x2":"16.000000004471076","y2":"16.000000003885361","key":"1"}),
    createElement(Polyline, {"points":"8.000000004471076 10.500000003885361 10.500000004471076 13.000000003885361 16.000000004471076 8.000000003885361","key":"2"})
  );
});

CheckUnderlineCircle.displayName = 'CheckUnderlineCircle';

export default CheckUnderlineCircle;
export { CheckUnderlineCircle };
