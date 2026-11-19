import { createElement, forwardRef } from 'react';
import Svg, { Rect } from 'react-native-svg';

const DashboardSharp = forwardRef(function DashboardSharp(
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
    createElement(Rect, {"x":"3.000000001580702","y":"12.00000002768229","width":"7","height":"9","key":"0"}),
    createElement(Rect, {"x":"13.999999990799552","y":"3.00000002768229","width":"7","height":"9","key":"1"}),
    createElement(Rect, {"x":"13.999999990799552","y":"16.00000002768229","width":"7","height":"5","key":"2"}),
    createElement(Rect, {"x":"3.000000001580702","y":"3.00000002768229","width":"7","height":"5","key":"3"})
  );
});

DashboardSharp.displayName = 'DashboardSharp';

export default DashboardSharp;
export { DashboardSharp };
