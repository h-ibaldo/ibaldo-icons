'use strict';

const { createElement, forwardRef } = require('react');

const MinusSignNegative1 = forwardRef(function MinusSignNegative1(
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
    createElement('line', {"x1":"21.000000004469257","y1":"12.000000003885361","x2":"3.000000004469257","y2":"12.000000003885361","key":"0"})
  );
});

MinusSignNegative1.displayName = 'MinusSignNegative1';

module.exports = MinusSignNegative1;
module.exports.MinusSignNegative1 = MinusSignNegative1;
module.exports.default = MinusSignNegative1;
