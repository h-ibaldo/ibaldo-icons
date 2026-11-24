'use strict';

const { createElement, forwardRef } = require('react');

const UserArrowUpWide = forwardRef(function UserArrowUpWide(
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
    createElement('path', {"d":"M12 22L12 16","key":"0"}),
    createElement('path', {"d":"M15 19L12 16L9 19","key":"1"}),
    createElement('path', {"d":"M7 7C7 4.238 9.238 2 12 2C14.762 2 17 4.238 17 7C17 9.762 14.762 12 12 12C9.238 12 7 9.762 7 7Z","key":"2"}),
    createElement('path', {"d":"M3 22L3 21C3 16.031 7.031 12 12 12C16.969 12 21 16.031 21 21L21 22","key":"3"})
  );
});

UserArrowUpWide.displayName = 'UserArrowUpWide';

module.exports = UserArrowUpWide;
module.exports.UserArrowUpWide = UserArrowUpWide;
module.exports.default = UserArrowUpWide;
