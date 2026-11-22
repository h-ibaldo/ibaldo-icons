'use strict';

const { createElement, forwardRef } = require('react');

const UserSettingsWide = forwardRef(function UserSettingsWide(
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
    createElement('path', {"d":"M4.5 6.5C4.5 4.016 6.516 2 9 2C11.484 2 13.5 4.016 13.5 6.5C13.5 8.984 11.484 11 9 11C6.516 11 4.5 8.984 4.5 6.5Z","key":"0"}),
    createElement('path', {"d":"M20.5 17C20.5 18.934 18.934 20.5 17 20.5C15.066 20.5 13.5 18.934 13.5 17C13.5 15.066 15.066 13.5 17 13.5C18.934 13.5 20.5 15.066 20.5 17Z","key":"1"}),
    createElement('path', {"d":"M17 17.012L17 17","key":"2"}),
    createElement('path', {"d":"M17 12L17 13.5","key":"3"}),
    createElement('path', {"d":"M17 20.5L17 22","key":"4"}),
    createElement('path', {"d":"M22 17L20.5 17","key":"5"}),
    createElement('path', {"d":"M13.5 17L12 17","key":"6"}),
    createElement('path', {"d":"M20.535 20.535L19.477 19.477","key":"7"}),
    createElement('path', {"d":"M14.523 14.523L13.465 13.465","key":"8"}),
    createElement('path', {"d":"M13.465 20.535L14.523 19.477","key":"9"}),
    createElement('path', {"d":"M19.477 14.523L20.535 13.465","key":"10"}),
    createElement('path', {"d":"M2 22L2 18C2 14.133 5.133 11 9 11C9.914 11 10.785 11.176 11.586 11.492","key":"11"})
  );
});

UserSettingsWide.displayName = 'UserSettingsWide';

module.exports = UserSettingsWide;
module.exports.UserSettingsWide = UserSettingsWide;
module.exports.default = UserSettingsWide;
