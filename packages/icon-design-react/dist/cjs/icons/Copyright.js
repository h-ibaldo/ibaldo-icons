'use strict';

const { createElement, forwardRef } = require('react');

const Copyright = forwardRef(function Copyright(
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
    createElement('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement('path', {"d":"M16 9.027C15.09 7.805 13.645 7 12 7C9.238 7 7 9.238 7 12C7 14.762 9.238 17 12 17C13.645 17 15.09 16.195 16 14.973","key":"1"})
  );
});

Copyright.displayName = 'Copyright';

module.exports = Copyright;
module.exports.Copyright = Copyright;
module.exports.default = Copyright;
