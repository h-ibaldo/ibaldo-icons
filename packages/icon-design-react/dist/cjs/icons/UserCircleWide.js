'use strict';

const { createElement, forwardRef } = require('react');

const UserCircleWide = forwardRef(function UserCircleWide(
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
    createElement('path', {"d":"M8.5 9.5C8.5 7.566 10.066 6 12 6C13.934 6 15.5 7.566 15.5 9.5C15.5 11.434 13.934 13 12 13C10.066 13 8.5 11.434 8.5 9.5Z","key":"0"}),
    createElement('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z","key":"1"}),
    createElement('path', {"d":"M5.047 19.188C5.449 15.703 8.41 13 12 13C15.59 13 18.551 15.703 18.953 19.188","key":"2"})
  );
});

UserCircleWide.displayName = 'UserCircleWide';

module.exports = UserCircleWide;
module.exports.UserCircleWide = UserCircleWide;
module.exports.default = UserCircleWide;
