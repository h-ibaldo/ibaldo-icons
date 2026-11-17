'use strict';

const { createElement, forwardRef } = require('react');

const ApplicationWindow2Key4 = forwardRef(function ApplicationWindow2Key4(
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
    createElement('path', {"d":"M9.00000000018008,22.000000000448381l-5,.000000000001819c-1.104569499659192,0-2-.895430500338989-2-2V4.000000000448381c0-1.104569499661011.895430500340808-1.999999999998181,2-1.999999999998181l16-.000000000001819c1.104569499659192,0,2,.89543050033808,2,2v6","key":"0"}),
    createElement('line', {"x1":"6.00000000018008","y1":"13.000000000448381","x2":"6.00000000018008","y2":"15.000000000448381","key":"1"}),
    createElement('line', {"x1":"9.00000000018008","y1":"13.000000000448381","x2":"9.00000000018008","y2":"15.000000000448381","key":"2"}),
    createElement('line', {"x1":"12.00000000018008","y1":"13.000000000448381","x2":"12.00000000018008","y2":"15.000000000448381","key":"3"}),
    createElement('path', {"d":"M19.00000000018008,13.000000000448381c-1.656860351560681,0-3,1.343139648438409-3,3,0,.30096435546875.057739257819776.585693359375.140197753909888.85980224609375l-3.140197753909888,3.14019775390625v2h2l3.140197753909888-3.14019775390625c.274108886729664.082458496094659.558837890619543.14019775390625.859802246090112.14019775390625,1.656860351569776,0,3-1.343139648436591,3-3,0-1.656860351561591-1.343139648430224-3-3-3Z","key":"4"}),
    createElement('line', {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381","key":"5"}),
    createElement('line', {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381","key":"6"}),
    createElement('line', {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381","key":"7"})
  );
});

ApplicationWindow2Key4.displayName = 'ApplicationWindow2Key4';

module.exports = ApplicationWindow2Key4;
module.exports.ApplicationWindow2Key4 = ApplicationWindow2Key4;
module.exports.default = ApplicationWindow2Key4;
