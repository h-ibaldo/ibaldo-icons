'use strict';

const { createElement, forwardRef } = require('react');

const UserArrowRight = forwardRef(function UserArrowRight(
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
    createElement('path', {"d":"M4 22L4 19C4 15.688 6.688 13 10 13L14 13C14.727 13 15.418 13.129 16.063 13.363","key":"1"}),
    createElement('path', {"d":"M14 19L21 19","key":"2"}),
    createElement('path', {"d":"M18 22L21 19L18 16","key":"3"})
  );
});

UserArrowRight.displayName = 'UserArrowRight';

module.exports = UserArrowRight;
module.exports.UserArrowRight = UserArrowRight;
module.exports.default = UserArrowRight;
