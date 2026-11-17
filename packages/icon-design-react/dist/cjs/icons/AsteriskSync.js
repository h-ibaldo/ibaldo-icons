'use strict';

const { createElement, forwardRef } = require('react');

const AsteriskSync = forwardRef(function AsteriskSync(
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
    createElement('path', {"d":"M4 22L4 18L8 18","key":"0"}),
    createElement('path', {"d":"M4.016 18C5.84 20.426 8.73 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 12.684 2.07 13.355 2.199 14","key":"1"}),
    createElement('path', {"d":"M12 8L12 16","key":"2"}),
    createElement('path', {"d":"M8.535 10L15.465 14","key":"3"}),
    createElement('path', {"d":"M8.535 14L15.465 10","key":"4"})
  );
});

AsteriskSync.displayName = 'AsteriskSync';

module.exports = AsteriskSync;
module.exports.AsteriskSync = AsteriskSync;
module.exports.default = AsteriskSync;
