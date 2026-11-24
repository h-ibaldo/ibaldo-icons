'use strict';

const { createElement, forwardRef } = require('react');

const GlobeCursor = forwardRef(function GlobeCursor(
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
    createElement('path', {"d":"M19.371 22L15.742 18.371L14.602 20.68C14.355 21.172 13.641 21.129 13.461 20.609L10.035 10.824C9.863 10.336 10.336 9.863 10.824 10.035L20.609 13.461C21.129 13.641 21.172 14.355 20.68 14.602L18.371 15.742L22 19.371Z","key":"0"}),
    createElement('path', {"d":"M17.738 8C16.848 4.551 13.727 2 10 2C5.582 2 2 5.582 2 10C2 13.727 4.551 16.848 8 17.738","key":"1"}),
    createElement('path', {"d":"M10 2.379L9.926 7","key":"2"}),
    createElement('path', {"d":"M2 10L7 10","key":"3"}),
    createElement('path', {"d":"M13.867 8C13.426 4.551 11.863 2 10 2C7.793 2 6 5.582 6 10C6 11.461 6.203 12.82 6.547 14","key":"4"})
  );
});

GlobeCursor.displayName = 'GlobeCursor';

module.exports = GlobeCursor;
module.exports.GlobeCursor = GlobeCursor;
module.exports.default = GlobeCursor;
