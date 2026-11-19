import { createElement, forwardRef } from 'react';
import Svg, { Rect } from 'react-native-svg';

const Dashboard = forwardRef(function Dashboard(
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
    createElement(Rect, {"x":"1.999999990790457","y":"2.000000000448381","width":"8","height":"6","rx":"1","ry":"1","key":"0"}),
    createElement(Rect, {"x":"13.999999990790457","y":"16.000000000448381","width":"8","height":"6","rx":"1","ry":"1","key":"1"}),
    createElement(Rect, {"x":"13.999999990790457","y":"2.000000000448381","width":"8","height":"10","rx":"1","ry":"1","key":"2"}),
    createElement(Rect, {"x":"1.999999990790457","y":"12.000000000448381","width":"8","height":"10","rx":"1","ry":"1","key":"3"})
  );
});

Dashboard.displayName = 'Dashboard';

export default Dashboard;
export { Dashboard };
