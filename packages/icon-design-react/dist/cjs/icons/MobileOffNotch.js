'use strict';

const { createElement, forwardRef } = require('react');

const MobileOffNotch = forwardRef(function MobileOffNotch(
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
    createElement('path', {"d":"M13 5L11 5","key":"0"}),
    createElement('path', {"d":"M22 2L2 22","key":"1"}),
    createElement('path', {"d":"M6 13L6 4C6 2.895 6.895 2 8 2L16 2C16.293 2 16.574 2.063 16.824 2.176","key":"2"}),
    createElement('path', {"d":"M18 6L18 20C18 21.105 17.105 22 16 22L8 22C6.895 22 6 21.105 6 20L6 18","key":"3"})
  );
});

MobileOffNotch.displayName = 'MobileOffNotch';

module.exports = MobileOffNotch;
module.exports.MobileOffNotch = MobileOffNotch;
module.exports.default = MobileOffNotch;
