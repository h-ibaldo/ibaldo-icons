'use strict';

const { createElement, forwardRef } = require('react');

const DashboardLayout1 = forwardRef(function DashboardLayout1(
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
    createElement('rect', {"x":"1.999999990790457","y":"2.000000000448381","width":"8","height":"6","rx":"1","ry":"1","key":"0"}),
    createElement('rect', {"x":"13.999999990790457","y":"16.000000000448381","width":"8","height":"6","rx":"1","ry":"1","key":"1"}),
    createElement('rect', {"x":"13.999999990790457","y":"2.000000000448381","width":"8","height":"10","rx":"1","ry":"1","key":"2"}),
    createElement('rect', {"x":"1.999999990790457","y":"12.000000000448381","width":"8","height":"10","rx":"1","ry":"1","key":"3"})
  );
});

DashboardLayout1.displayName = 'DashboardLayout1';

module.exports = DashboardLayout1;
module.exports.DashboardLayout1 = DashboardLayout1;
module.exports.default = DashboardLayout1;
