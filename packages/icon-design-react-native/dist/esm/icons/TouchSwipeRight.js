import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Polyline } from 'react-native-svg';

const TouchSwipeRight = forwardRef(function TouchSwipeRight(
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
    createElement(Polyline, {"points":"17.075805664055224 8.998782737457077 20.075805663656865 11.998782737860893 17.075805663256688 14.998782737457077","key":"0"}),
    createElement(Line, {"x1":"12.075805663656865","y1":"11.998782736780413","x2":"20.075805663656865","y2":"11.998782737860893","key":"1"}),
    createElement(Circle, {"cx":"8.075805663656411","cy":"11.998782736241992","r":"4.000000000000227","key":"2"})
  );
});

TouchSwipeRight.displayName = 'TouchSwipeRight';

export default TouchSwipeRight;
export { TouchSwipeRight };
