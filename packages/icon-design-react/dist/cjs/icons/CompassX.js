'use strict';

const { createElement, forwardRef } = require('react');

const CompassX = forwardRef(function CompassX(
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
    createElement('path', {"d":"M16 8L10 10L8 16L14 14Z","key":"0"}),
    createElement('path', {"d":"M6 2L2 6","key":"1"}),
    createElement('path', {"d":"M2 2L6 6","key":"2"}),
    createElement('path', {"d":"M2.211 10C2.078 10.645 2 11.313 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C11.313 2 10.648 2.078 10 2.211","key":"3"})
  );
});

CompassX.displayName = 'CompassX';

module.exports = CompassX;
module.exports.CompassX = CompassX;
module.exports.default = CompassX;
