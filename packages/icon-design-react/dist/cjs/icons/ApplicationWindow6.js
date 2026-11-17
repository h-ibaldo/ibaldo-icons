'use strict';

const { createElement, forwardRef } = require('react');

const ApplicationWindow6 = forwardRef(function ApplicationWindow6(
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
    createElement('rect', {"x":"2.00000000018008","y":"2.000000000448836","width":"20","height":"20","rx":"1.999999999999432","ry":"1.999999999999432","key":"0"}),
    createElement('line', {"x1":"22.00000000036016","y1":"8.000000000897671","x2":"2.00000000036016","y2":"8","key":"1"}),
    createElement('line', {"x1":"19.010000000489526","y1":"5.000000000763976","x2":"19.000000000490218","y2":"5.000000000763976","key":"2"}),
    createElement('line', {"x1":"16.010000000489526","y1":"5.000000000627551","x2":"16.000000000490218","y2":"5.000000000627551","key":"3"})
  );
});

ApplicationWindow6.displayName = 'ApplicationWindow6';

module.exports = ApplicationWindow6;
module.exports.ApplicationWindow6 = ApplicationWindow6;
module.exports.default = ApplicationWindow6;
