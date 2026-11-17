'use strict';

const { createElement, forwardRef } = require('react');

const LinkCheckCompact = forwardRef(function LinkCheckCompact(
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
    createElement('path', {"d":"M7 15L15 7","key":"0"}),
    createElement('path', {"d":"M9.051 5.949L11.551 3.449C13.484 1.516 16.617 1.516 18.551 3.449C20.484 5.383 20.484 8.516 18.551 10.449L16.051 12.949","key":"1"}),
    createElement('path', {"d":"M12.949 16.051L10.449 18.551C8.516 20.484 5.383 20.484 3.449 18.551C1.516 16.617 1.516 13.484 3.449 11.551L5.949 9.051","key":"2"}),
    createElement('path', {"d":"M16 20L18 22L22 18","key":"3"})
  );
});

LinkCheckCompact.displayName = 'LinkCheckCompact';

module.exports = LinkCheckCompact;
module.exports.LinkCheckCompact = LinkCheckCompact;
module.exports.default = LinkCheckCompact;
