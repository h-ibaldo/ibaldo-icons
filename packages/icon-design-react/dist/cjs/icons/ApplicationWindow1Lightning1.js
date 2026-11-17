'use strict';

const { createElement, forwardRef } = require('react');

const ApplicationWindow1Lightning1 = forwardRef(function ApplicationWindow1Lightning1(
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
    createElement('rect', {"x":"2.00000000018008","y":"2.000000000448381","width":"20","height":"20","rx":"2","ry":"2","key":"0"}),
    createElement('line', {"x1":"2.00000000018008","y1":"8.000000000448381","x2":"22.00000000018008","y2":"8.000000000448381","key":"1"}),
    createElement('line', {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381","key":"2"}),
    createElement('line', {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381","key":"3"}),
    createElement('line', {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381","key":"4"}),
    createElement('polyline', {"points":"12.00000000018008 15.000000000448381 12.00000000018008 19.000000000448381 15.00000000018008 15.000000000448381 9.00000000018008 15.000000000448381 12.00000000018008 11.000000000448381 12.00000000018008 15.000000000448381","key":"5"})
  );
});

ApplicationWindow1Lightning1.displayName = 'ApplicationWindow1Lightning1';

module.exports = ApplicationWindow1Lightning1;
module.exports.ApplicationWindow1Lightning1 = ApplicationWindow1Lightning1;
module.exports.default = ApplicationWindow1Lightning1;
