'use strict';

const { createElement, forwardRef } = require('react');

const Clock1 = forwardRef(function Clock1(
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
    createElement('circle', {"cx":"12","cy":"11.999999999998181","r":"10","key":"0"}),
    createElement('polyline', {"points":"12.000000006790287 6.999999999998181 12.000000006790287 11.999999999998181 17.000000006790287 13.999999999998181","key":"1"})
  );
});

Clock1.displayName = 'Clock1';

module.exports = Clock1;
module.exports.Clock1 = Clock1;
module.exports.default = Clock1;
