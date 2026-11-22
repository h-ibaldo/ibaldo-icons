'use strict';

const { createElement, forwardRef } = require('react');

const UserLockWide = forwardRef(function UserLockWide(
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
    createElement('path', {"d":"M22 16L14 16L14 22L22 22Z","key":"0"}),
    createElement('path', {"d":"M18 11C16.344 11 15 12.344 15 14L15 16L21 16L21 14C21 12.344 19.656 11 18 11Z","key":"1"}),
    createElement('path', {"d":"M4.5 6.5C4.5 4.016 6.516 2 9 2C11.484 2 13.5 4.016 13.5 6.5C13.5 8.984 11.484 11 9 11C6.516 11 4.5 8.984 4.5 6.5Z","key":"2"}),
    createElement('path', {"d":"M2 22L2 18C2 14.133 5.133 11 9 11","key":"3"}),
    createElement('path', {"d":"M12.438 11.902C11.422 11.328 10.25 11 9 11","key":"4"})
  );
});

UserLockWide.displayName = 'UserLockWide';

module.exports = UserLockWide;
module.exports.UserLockWide = UserLockWide;
module.exports.default = UserLockWide;
