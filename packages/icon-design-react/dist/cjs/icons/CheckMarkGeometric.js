'use strict';

const { createElement, forwardRef } = require('react');

const CheckMarkGeometric = forwardRef(function CheckMarkGeometric(
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
    createElement('polygon', {"points":"2.949462885140747 12.000000000480213 5.949462885140747 9.000000000480213 9.949462885140747 13.000000000480213 17.949462885140747 5.000000000480213 20.949462885140747 8.000000000480213 9.949462885140747 19.000000000480213 2.949462885140747 12.000000000480213","key":"0"})
  );
});

CheckMarkGeometric.displayName = 'CheckMarkGeometric';

module.exports = CheckMarkGeometric;
module.exports.CheckMarkGeometric = CheckMarkGeometric;
module.exports.default = CheckMarkGeometric;
