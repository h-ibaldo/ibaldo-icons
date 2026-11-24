'use strict';

const { createElement, forwardRef } = require('react');

const UserArrowLeftCenter = forwardRef(function UserArrowLeftCenter(
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
    createElement('path', {"d":"M16 19L8 19","key":"0"}),
    createElement('path', {"d":"M11 16L8 19L11 22","key":"1"}),
    createElement('path', {"d":"M8 6C8 3.789 9.789 2 12 2C14.211 2 16 3.789 16 6C16 8.211 14.211 10 12 10C9.789 10 8 8.211 8 6Z","key":"2"}),
    createElement('path', {"d":"M4 22L4 19C4 15.688 6.688 13 10 13L14 13C17.313 13 20 15.688 20 19L20 22","key":"3"})
  );
});

UserArrowLeftCenter.displayName = 'UserArrowLeftCenter';

module.exports = UserArrowLeftCenter;
module.exports.UserArrowLeftCenter = UserArrowLeftCenter;
module.exports.default = UserArrowLeftCenter;
