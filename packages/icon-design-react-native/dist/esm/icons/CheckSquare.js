import { createElement, forwardRef } from 'react';
import Svg, { Polyline, Rect } from 'react-native-svg';

const CheckSquare = forwardRef(function CheckSquare(
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
    createElement(Polyline, {"points":"7.949462885140747 12.000000000480213 10.949462885140747 15.000000000480213 15.949462885140747 9.000000000480213","key":"0"}),
    createElement(Rect, {"x":"1.949462885140747","y":"2.000000000480213","width":"20","height":"20","rx":"3","ry":"3","key":"1"})
  );
});

CheckSquare.displayName = 'CheckSquare';

export default CheckSquare;
export { CheckSquare };
