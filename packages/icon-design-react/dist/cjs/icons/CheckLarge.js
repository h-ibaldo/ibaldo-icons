'use strict';

const { createElement, forwardRef } = require('react');

const CheckLarge = forwardRef(function CheckLarge(
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
    createElement('polyline', {"points":"1.974731440080177 12.250000003874447 8.974731440080177 19.000000003874447 21.974731440080177 5.000000003874447","key":"0"})
  );
});

CheckLarge.displayName = 'CheckLarge';

module.exports = CheckLarge;
module.exports.CheckLarge = CheckLarge;
module.exports.default = CheckLarge;
