'use strict';

const { createElement, forwardRef } = require('react');

const ApplicationWindow1Lightning2 = forwardRef(function ApplicationWindow1Lightning2(
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
    createElement('path', {"d":"M12.00000000018008,22.000000000448381H4.00000000018008c-1.104569499660101,0-2-.89543050033717-2-2V4.000000000448381c0-1.10456949966192.895430500339899-2,2-2h16c1.104569499660101,0,2,.89543050033808,2,2v8","key":"0"}),
    createElement('line', {"x1":"2.00000000018008","y1":"8.000000000448381","x2":"22.00000000018008","y2":"8.000000000448381","key":"1"}),
    createElement('line', {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381","key":"2"}),
    createElement('line', {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381","key":"3"}),
    createElement('line', {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381","key":"4"}),
    createElement('polyline', {"points":"17.00000000018008 17.000000000448381 17.00000000018008 22.000000000448381 20.00000000018008 16.000000000448381 14.00000000018008 18.000000000448381 17.00000000018008 12.000000000448381 17.00000000018008 17.000000000448381","key":"5"})
  );
});

ApplicationWindow1Lightning2.displayName = 'ApplicationWindow1Lightning2';

module.exports = ApplicationWindow1Lightning2;
module.exports.ApplicationWindow1Lightning2 = ApplicationWindow1Lightning2;
module.exports.default = ApplicationWindow1Lightning2;
