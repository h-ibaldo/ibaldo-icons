'use strict';

const { createElement, forwardRef } = require('react');

const MinusSignNegativeCircle1 = forwardRef(function MinusSignNegativeCircle1(
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
    createElement('line', {"x1":"16.000000004469257","y1":"12.000000003885361","x2":"8.000000004469257","y2":"12.000000003885361","key":"0"}),
    createElement('circle', {"cx":"12.000000004469257","cy":"12.000000003885589","r":"9.999999999999659","key":"1"})
  );
});

MinusSignNegativeCircle1.displayName = 'MinusSignNegativeCircle1';

module.exports = MinusSignNegativeCircle1;
module.exports.MinusSignNegativeCircle1 = MinusSignNegativeCircle1;
module.exports.default = MinusSignNegativeCircle1;
