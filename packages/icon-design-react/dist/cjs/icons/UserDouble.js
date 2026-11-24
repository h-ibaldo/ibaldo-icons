'use strict';

const { createElement, forwardRef } = require('react');

const UserDouble = forwardRef(function UserDouble(
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
    createElement('path', {"d":"M5 6C5 3.789 6.789 2 9 2C11.211 2 13 3.789 13 6C13 8.211 11.211 10 9 10C6.789 10 5 8.211 5 6Z","key":"0"}),
    createElement('path', {"d":"M2 21.777L2 17C2 13.133 5.133 10 9 10C12.867 10 16 13.133 16 17L16 21.777","key":"1"}),
    createElement('path', {"d":"M15 10C18.867 10 22 13.133 22 17L22 21.777","key":"2"}),
    createElement('path', {"d":"M14.75 2.008C14.832 2.004 14.918 2 15 2C17.211 2 19 3.789 19 6C19 8.211 17.211 10 15 10C14.918 10 14.832 9.996 14.75 9.992","key":"3"})
  );
});

UserDouble.displayName = 'UserDouble';

module.exports = UserDouble;
module.exports.UserDouble = UserDouble;
module.exports.default = UserDouble;
