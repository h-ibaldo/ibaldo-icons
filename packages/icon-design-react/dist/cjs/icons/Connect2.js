'use strict';

const { createElement, forwardRef } = require('react');

const Connect2 = forwardRef(function Connect2(
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
    createElement('circle', {"cx":"5","cy":"11.999999999998181","r":"3","key":"0"}),
    createElement('line', {"x1":"8","y1":"11.999999999998181","x2":"13","y2":"11.999999999998181","key":"1"}),
    createElement('circle', {"cx":"19","cy":"4.999999999998181","r":"3","key":"2"}),
    createElement('circle', {"cx":"19","cy":"18.999999999998181","r":"3","key":"3"}),
    createElement('polyline', {"points":"17.05615234375 7.267822265617724 13 11.999999999998181 17.05615234375 16.732177734367724","key":"4"})
  );
});

Connect2.displayName = 'Connect2';

module.exports = Connect2;
module.exports.Connect2 = Connect2;
module.exports.default = Connect2;
