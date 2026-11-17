import { createElement, forwardRef } from 'react';

const DashboardSharp = forwardRef(function DashboardSharp(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('rect', {"x":"3.000000001580702","y":"12.00000002768229","width":"7","height":"9","key":"0"}),
    createElement('rect', {"x":"13.999999990799552","y":"3.00000002768229","width":"7","height":"9","key":"1"}),
    createElement('rect', {"x":"13.999999990799552","y":"16.00000002768229","width":"7","height":"5","key":"2"}),
    createElement('rect', {"x":"3.000000001580702","y":"3.00000002768229","width":"7","height":"5","key":"3"})
  );
});

DashboardSharp.displayName = 'DashboardSharp';

export default DashboardSharp;
export { DashboardSharp };
