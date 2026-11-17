'use strict';

const { createElement, forwardRef } = require('react');

const PaperclipCircleArrowRightShort = forwardRef(function PaperclipCircleArrowRightShort(
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
    createElement('path', {"d":"M6 6L8 4L6 2","key":"0"}),
    createElement('path', {"d":"M2 4L8 4","key":"1"}),
    createElement('path', {"d":"M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 10.953 2.16 9.945 2.461 9","key":"2"}),
    createElement('path', {"d":"M11.5 13.5L15.379 9.621C16.207 8.793 16.207 7.449 15.379 6.621C14.551 5.793 13.207 5.793 12.379 6.621L7.676 11.324C6.293 12.707 6.293 14.945 7.676 16.324C9.055 17.707 11.293 17.707 12.676 16.324L16 13","key":"3"})
  );
});

PaperclipCircleArrowRightShort.displayName = 'PaperclipCircleArrowRightShort';

module.exports = PaperclipCircleArrowRightShort;
module.exports.PaperclipCircleArrowRightShort = PaperclipCircleArrowRightShort;
module.exports.default = PaperclipCircleArrowRightShort;
