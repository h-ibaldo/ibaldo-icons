'use strict';

const { createElement, forwardRef } = require('react');

const XDeleteCircle1 = forwardRef(function XDeleteCircle1(
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
    createElement('line', {"x1":"7.999999990970537","y1":"16.000000000715772","x2":"15.999999990610377","y2":"8.00000000107957","key":"0"}),
    createElement('line', {"x1":"15.999999990430297","y1":"16.000000000894943","x2":"7.999999991150617","y2":"8.0000000009004","key":"1"}),
    createElement('circle', {"cx":"11.999999990790457","cy":"12.000000000897671","r":"10","key":"2"})
  );
});

XDeleteCircle1.displayName = 'XDeleteCircle1';

module.exports = XDeleteCircle1;
module.exports.XDeleteCircle1 = XDeleteCircle1;
module.exports.default = XDeleteCircle1;
