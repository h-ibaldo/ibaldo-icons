'use strict';

const { createElement, forwardRef } = require('react');

const PaperclipCircleXLong = forwardRef(function PaperclipCircleXLong(
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
    createElement('path', {"d":"M22 22L18 18","key":"0"}),
    createElement('path', {"d":"M22 18L18 22","key":"1"}),
    createElement('path', {"d":"M21.797 14C21.93 13.355 22 12.684 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C12.684 22 13.355 21.93 14 21.801","key":"2"}),
    createElement('path', {"d":"M16 12L12 16C10.895 17.105 9.105 17.105 8 16C6.895 14.895 6.895 13.105 8 12L13 7C13.555 6.449 14.445 6.449 15 7C15.555 7.551 15.555 8.449 15 9L11 13","key":"3"})
  );
});

PaperclipCircleXLong.displayName = 'PaperclipCircleXLong';

module.exports = PaperclipCircleXLong;
module.exports.PaperclipCircleXLong = PaperclipCircleXLong;
module.exports.default = PaperclipCircleXLong;
