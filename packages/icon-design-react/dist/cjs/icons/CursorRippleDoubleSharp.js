'use strict';

const { createElement, forwardRef } = require('react');

const CursorRippleDoubleSharp = forwardRef(function CursorRippleDoubleSharp(
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
    createElement('path', {"d":"M22 14.375L11 11L14.375 22L16.262 19.09L19.172 22L22 19.172L19.09 16.262Z","key":"0"}),
    createElement('path', {"d":"M9 15.578C7.234 14.805 6 13.051 6 11C6 8.238 8.238 6 11 6C13.051 6 14.805 7.234 15.578 9","key":"1"}),
    createElement('path', {"d":"M10 19.941C5.5 19.445 2 15.633 2 11C2 6.031 6.027 2 11 2C15.633 2 19.441 5.5 19.941 10","key":"2"})
  );
});

CursorRippleDoubleSharp.displayName = 'CursorRippleDoubleSharp';

module.exports = CursorRippleDoubleSharp;
module.exports.CursorRippleDoubleSharp = CursorRippleDoubleSharp;
module.exports.default = CursorRippleDoubleSharp;
