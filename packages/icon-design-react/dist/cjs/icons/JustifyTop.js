'use strict';

const { createElement, forwardRef } = require('react');

const JustifyTop = forwardRef(function JustifyTop(
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
    createElement('path', {"d":"M22 2L2 2","key":"0"}),
    createElement('path', {"d":"M8 11L8 7C8 6.449 8.449 6 9 6L15 6C15.551 6 16 6.449 16 7L16 11C16 11.551 15.551 12 15 12L9 12C8.449 12 8 11.551 8 11Z","key":"1"}),
    createElement('path', {"d":"M6 21L6 17C6 16.449 6.449 16 7 16L17 16C17.551 16 18 16.449 18 17L18 21C18 21.551 17.551 22 17 22L7 22C6.449 22 6 21.551 6 21Z","key":"2"})
  );
});

JustifyTop.displayName = 'JustifyTop';

module.exports = JustifyTop;
module.exports.JustifyTop = JustifyTop;
module.exports.default = JustifyTop;
