'use strict';

const { createElement, forwardRef } = require('react');

const XDeleteCircle2 = forwardRef(function XDeleteCircle2(
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
    createElement('circle', {"cx":"11.999999990790457","cy":"12.000000000897671","r":"10","key":"0"}),
    createElement('line', {"x1":"8.999999990919605","y1":"15.000000000763976","x2":"14.999999990650394","y2":"9.000000001032276","key":"1"}),
    createElement('line', {"x1":"14.999999990519427","y1":"15.000000000894943","x2":"8.999999991059667","y2":"9.000000000897671","key":"2"})
  );
});

XDeleteCircle2.displayName = 'XDeleteCircle2';

module.exports = XDeleteCircle2;
module.exports.XDeleteCircle2 = XDeleteCircle2;
module.exports.default = XDeleteCircle2;
