'use strict';

const { createElement, forwardRef } = require('react');

const CursorUpRippleDouble = forwardRef(function CursorUpRippleDouble(
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
    createElement('path', {"d":"M10.031 22L10.031 18L7 18L12.031 10L17 18L14.031 18L14.031 22Z","key":"0"}),
    createElement('path', {"d":"M16 10C16 7.789 14.211 6 12 6C9.789 6 8 7.789 8 10","key":"1"}),
    createElement('path', {"d":"M18.922 14C19.605 12.82 20 11.461 20 10C20 5.582 16.418 2 12 2C7.582 2 4 5.582 4 10C4 11.461 4.398 12.82 5.078 14","key":"2"})
  );
});

CursorUpRippleDouble.displayName = 'CursorUpRippleDouble';

module.exports = CursorUpRippleDouble;
module.exports.CursorUpRippleDouble = CursorUpRippleDouble;
module.exports.default = CursorUpRippleDouble;
