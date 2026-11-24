'use strict';

const { createElement, forwardRef } = require('react');

const UserCheck = forwardRef(function UserCheck(
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
    createElement('path', {"d":"M8 6C8 3.789 9.789 2 12 2C14.211 2 16 3.789 16 6C16 8.211 14.211 10 12 10C9.789 10 8 8.211 8 6Z","key":"0"}),
    createElement('path', {"d":"M4 22L4 19C4 15.688 6.688 13 10 13L14 13C16.031 13 17.824 14.008 18.91 15.551","key":"1"}),
    createElement('path', {"d":"M15 20L16.5 22L21 18","key":"2"})
  );
});

UserCheck.displayName = 'UserCheck';

module.exports = UserCheck;
module.exports.UserCheck = UserCheck;
module.exports.default = UserCheck;
