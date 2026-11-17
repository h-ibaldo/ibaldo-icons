'use strict';

const { createElement, forwardRef } = require('react');

const DashboardLayout3 = forwardRef(function DashboardLayout3(
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
    createElement('rect', {"x":"2.999999990799552","y":"2.000000000448381","width":"18","height":"20","key":"0"}),
    createElement('line', {"x1":"12.000000015979822","y1":"2.000000000448381","x2":"12.000000015979822","y2":"22.000000000448381","key":"1"}),
    createElement('line', {"x1":"2.999999990799552","y1":"9.000000000448381","x2":"12.000000015979822","y2":"9.000000000448381","key":"2"}),
    createElement('line', {"x1":"12.000000015979822","y1":"15.000000000448381","x2":"20.999999990799552","y2":"15.000000000448381","key":"3"})
  );
});

DashboardLayout3.displayName = 'DashboardLayout3';

module.exports = DashboardLayout3;
module.exports.DashboardLayout3 = DashboardLayout3;
module.exports.default = DashboardLayout3;
