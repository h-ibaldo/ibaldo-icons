'use strict';

const { createElement, forwardRef } = require('react');

const CheckMark4 = forwardRef(function CheckMark4(
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
    createElement('polyline', {"points":"6.974731440080177 13.000000003874447 9.974731440080177 16.000000003874447 16.974731440080177 8.000000003874447","key":"0"})
  );
});

CheckMark4.displayName = 'CheckMark4';

module.exports = CheckMark4;
module.exports.CheckMark4 = CheckMark4;
module.exports.default = CheckMark4;
