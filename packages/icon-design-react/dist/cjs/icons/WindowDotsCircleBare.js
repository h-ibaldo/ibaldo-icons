'use strict';

const { createElement, forwardRef } = require('react');

const WindowDotsCircleBare = forwardRef(function WindowDotsCircleBare(
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
    createElement('path', {"d":"M9.00000000018008,22.000000000456566l-5,.000000000002728c-1.104569499659192,0-2-.89543050033717-2-2V4.000000000456566c0-1.104569499661011.895430500340808-1.999999999997272,2-1.999999999997272l16-.000000000002728c1.104569499659192,0,2,.895430500338989,2,2v4.999999999991815","key":"0"}),
    createElement('circle', {"cx":"16.50000000018008","cy":"16.500000000456566","r":"5.5","key":"1"}),
    createElement('line', {"x1":"14.75000000018008","y1":"16.510000000370383","x2":"14.75000000018008","y2":"16.500000000548425","key":"2"}),
    createElement('line', {"x1":"18.25000000018008","y1":"16.500000000370164","x2":"18.25000000018008","y2":"16.510000000548644","key":"3"}),
    createElement('line', {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381","key":"4"}),
    createElement('line', {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381","key":"5"}),
    createElement('line', {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381","key":"6"})
  );
});

WindowDotsCircleBare.displayName = 'WindowDotsCircleBare';

module.exports = WindowDotsCircleBare;
module.exports.WindowDotsCircleBare = WindowDotsCircleBare;
module.exports.default = WindowDotsCircleBare;
