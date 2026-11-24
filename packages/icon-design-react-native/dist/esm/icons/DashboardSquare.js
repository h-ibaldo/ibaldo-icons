import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const DashboardSquare = forwardRef(function DashboardSquare(
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
    createElement(Rect, {"x":"2.999999990799552","y":"2.000000000448381","width":"18","height":"20","key":"0"}),
    createElement(Line, {"x1":"12.000000015979822","y1":"2.000000000448381","x2":"12.000000015979822","y2":"22.000000000448381","key":"1"}),
    createElement(Line, {"x1":"2.999999990799552","y1":"9.000000000448381","x2":"12.000000015979822","y2":"9.000000000448381","key":"2"}),
    createElement(Line, {"x1":"12.000000015979822","y1":"15.000000000448381","x2":"20.999999990799552","y2":"15.000000000448381","key":"3"})
  );
});

DashboardSquare.displayName = 'DashboardSquare';

export default DashboardSquare;
export { DashboardSquare };
