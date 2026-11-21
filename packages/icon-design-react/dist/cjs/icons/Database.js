'use strict';

const { createElement, forwardRef } = require('react');

const Database = forwardRef(function Database(
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
    createElement('path', {"d":"M4 7C4 4.789 7.582 3 12 3C16.418 3 20 4.789 20 7C20 9.211 16.418 11 12 11C7.582 11 4 9.211 4 7Z","key":"0"}),
    createElement('path', {"d":"M20 12C20 14.211 16.418 16 12 16C7.582 16 4 14.211 4 12","key":"1"}),
    createElement('path', {"d":"M20 17C20 19.211 16.418 21 12 21C7.582 21 4 19.211 4 17","key":"2"}),
    createElement('path', {"d":"M20 7L20 17","key":"3"}),
    createElement('path', {"d":"M4 17L4 7","key":"4"})
  );
});

Database.displayName = 'Database';

module.exports = Database;
module.exports.Database = Database;
module.exports.default = Database;
