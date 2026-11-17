'use strict';

const { createElement, forwardRef } = require('react');

const ApplicationWindow2Music1 = forwardRef(function ApplicationWindow2Music1(
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
    createElement('polyline', {"points":"15.00000000018008 11.000000000448381 12.00000000018008 10.000000000448381 12.00000000018008 17.000000000448381","key":"0"}),
    createElement('ellipse', {"cx":"10.50000000018008","cy":"17.000000000448381","rx":"1.5","ry":"1","key":"1"}),
    createElement('rect', {"x":"2.00000000018008","y":"2.00000000044929","width":"20","height":"20","rx":"1.999999999999977","ry":"1.999999999999977","key":"2"}),
    createElement('line', {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381","key":"3"}),
    createElement('line', {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381","key":"4"}),
    createElement('line', {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381","key":"5"})
  );
});

ApplicationWindow2Music1.displayName = 'ApplicationWindow2Music1';

module.exports = ApplicationWindow2Music1;
module.exports.ApplicationWindow2Music1 = ApplicationWindow2Music1;
module.exports.default = ApplicationWindow2Music1;
