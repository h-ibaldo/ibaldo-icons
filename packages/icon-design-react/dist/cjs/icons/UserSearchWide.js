'use strict';

const { createElement, forwardRef } = require('react');

const UserSearchWide = forwardRef(function UserSearchWide(
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
    createElement('path', {"d":"M6 7C6 4.238 8.238 2 11 2C13.762 2 16 4.238 16 7C16 9.762 13.762 12 11 12C8.238 12 6 9.762 6 7Z","key":"0"}),
    createElement('path', {"d":"M2 22L2 21C2 16.031 6.031 12 11 12C12.195 12 13.336 12.234 14.379 12.656","key":"1"}),
    createElement('path', {"d":"M16 17C16 18.656 17.344 20 19 20C20.656 20 22 18.656 22 17C22 15.344 20.656 14 19 14C17.344 14 16 15.344 16 17Z","key":"2"}),
    createElement('path', {"d":"M16.879 19.121L14 22","key":"3"})
  );
});

UserSearchWide.displayName = 'UserSearchWide';

module.exports = UserSearchWide;
module.exports.UserSearchWide = UserSearchWide;
module.exports.default = UserSearchWide;
