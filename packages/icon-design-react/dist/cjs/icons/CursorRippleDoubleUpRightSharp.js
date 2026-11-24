'use strict';

const { createElement, forwardRef } = require('react');

const CursorRippleDoubleUpRightSharp = forwardRef(function CursorRippleDoubleUpRightSharp(
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
    createElement('path', {"d":"M2 14.375L13 11L9.625 22L7.738 19.09L4.828 22L2 19.172L4.91 16.262Z","key":"0"}),
    createElement('path', {"d":"M15 15.578C16.766 14.805 18 13.051 18 11C18 8.238 15.762 6 13 6C10.949 6 9.195 7.234 8.422 9","key":"1"}),
    createElement('path', {"d":"M14 19.941C18.5 19.445 22 15.633 22 11C22 6.031 17.973 2 13 2C8.367 2 4.559 5.5 4.059 10","key":"2"})
  );
});

CursorRippleDoubleUpRightSharp.displayName = 'CursorRippleDoubleUpRightSharp';

module.exports = CursorRippleDoubleUpRightSharp;
module.exports.CursorRippleDoubleUpRightSharp = CursorRippleDoubleUpRightSharp;
module.exports.default = CursorRippleDoubleUpRightSharp;
