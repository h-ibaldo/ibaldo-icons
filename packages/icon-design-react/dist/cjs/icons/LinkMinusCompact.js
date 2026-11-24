'use strict';

const { createElement, forwardRef } = require('react');

const LinkMinusCompact = forwardRef(function LinkMinusCompact(
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
    createElement('path', {"d":"M8 16L16 8","key":"0"}),
    createElement('path', {"d":"M10.051 6.949L12.551 4.449C14.484 2.516 17.617 2.516 19.551 4.449C21.484 6.383 21.484 9.516 19.551 11.449L17.051 13.949","key":"1"}),
    createElement('path', {"d":"M13.949 17.051L11.449 19.551C9.516 21.484 6.383 21.484 4.449 19.551C2.516 17.617 2.516 14.484 4.449 12.551L6.949 10.051","key":"2"}),
    createElement('path', {"d":"M22 19.5L17 19.5","key":"3"})
  );
});

LinkMinusCompact.displayName = 'LinkMinusCompact';

module.exports = LinkMinusCompact;
module.exports.LinkMinusCompact = LinkMinusCompact;
module.exports.default = LinkMinusCompact;
