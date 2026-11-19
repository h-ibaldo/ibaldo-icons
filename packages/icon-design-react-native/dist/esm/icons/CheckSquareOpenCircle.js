import { createElement, forwardRef } from 'react';
import Svg, { Circle, Path, Polyline } from 'react-native-svg';

const CheckSquareOpenCircle = forwardRef(function CheckSquareOpenCircle(
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
    createElement(Circle, {"cx":"11.974731440100186","cy":"12.000000003885361","r":"10","key":"0"}),
    createElement(Path, {"d":"M16.974731440100186,12.000000003885361v3c0,1.104569499661011-.895430500329894,2-2,2h-6c-1.104569499660101,0-2-.895430500338989-2-2v-6c0-1.104569499661011.895430500339899-2,2-2h3","key":"1"}),
    createElement(Polyline, {"points":"9.974731440100186 11.000000003885361 11.974731440100186 13.000000003885361 15.974731440100186 8.000000003885361","key":"2"})
  );
});

CheckSquareOpenCircle.displayName = 'CheckSquareOpenCircle';

export default CheckSquareOpenCircle;
export { CheckSquareOpenCircle };
