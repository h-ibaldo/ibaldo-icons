'use strict';

const { createElement, forwardRef } = require('react');

const FileUser = forwardRef(function FileUser(
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
    createElement('path', {"d":"M11 15C11 16.657 9.657 18 8 18C6.343 18 5 16.657 5 15C5 13.343 6.343 12 8 12C9.657 12 11 13.343 11 15Z","key":"0"}),
    createElement('path', {"d":"M13 22L13 22C13 19.791 11.209 18 9 18L7 18C4.791 18 3 19.791 3 22L3 22","key":"1"}),
    createElement('path', {"d":"M5 9L5 4C5 2.895 5.895 2 7 2L15.016 2C15.646 2 16.25 2.25 16.696 2.696L20.304 6.304C20.75 6.75 21 7.354 21 7.984L21 20C21 21.105 20.105 22 19 22L17 22","key":"2"}),
    createElement('path', {"d":"M15 2L15 7C15 7.552 15.448 8 16 8L21 8","key":"3"})
  );
});

FileUser.displayName = 'FileUser';

module.exports = FileUser;
module.exports.FileUser = FileUser;
module.exports.default = FileUser;
