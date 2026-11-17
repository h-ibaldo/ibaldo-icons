'use strict';

const { createElement, forwardRef } = require('react');

const ApplicationWindow2Music4 = forwardRef(function ApplicationWindow2Music4(
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
    createElement('path', {"d":"M8.00000000018008,22.000000000448381l-4,.000000000001819c-1.104569499659192,0-2-.895430500338989-2-2V4.000000000448381c0-1.104569499661011.895430500340808-1.999999999998181,2-1.999999999998181l16-.000000000001819c1.104569499659192,0,2,.89543050033808,2,2v5","key":"0"}),
    createElement('polyline', {"points":"22.00000000018008 13.0000000004502 15.00000000018008 14.000000000448381 15.00000000018008 21.000000000448381","key":"1"}),
    createElement('ellipse', {"cx":"13.50000000018008","cy":"21.000000000448381","rx":"1.5","ry":"1","key":"2"}),
    createElement('line', {"x1":"22.00000000018008","y1":"13.000000000448381","x2":"22.00000000018008","y2":"20.000000000448381","key":"3"}),
    createElement('ellipse', {"cx":"20.50000000018008","cy":"20.000000000448381","rx":"1.5","ry":"1","key":"4"}),
    createElement('line', {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381","key":"5"}),
    createElement('line', {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381","key":"6"}),
    createElement('line', {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381","key":"7"})
  );
});

ApplicationWindow2Music4.displayName = 'ApplicationWindow2Music4';

module.exports = ApplicationWindow2Music4;
module.exports.ApplicationWindow2Music4 = ApplicationWindow2Music4;
module.exports.default = ApplicationWindow2Music4;
