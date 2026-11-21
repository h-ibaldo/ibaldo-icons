'use strict';

const { createElement, forwardRef } = require('react');

const MobileUserNotch = forwardRef(function MobileUserNotch(
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
    createElement('path', {"d":"M11 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L13 2C14.105 2 15 2.895 15 4L15 10.945","key":"0"}),
    createElement('path', {"d":"M8 5L10 5","key":"1"}),
    createElement('path', {"d":"M14 22C14 20.344 15.344 19 17 19L18 19C19.656 19 21 20.344 21 22","key":"2"}),
    createElement('path', {"d":"M15 16.5C15 15.121 16.121 14 17.5 14C18.879 14 20 15.121 20 16.5C20 17.879 18.879 19 17.5 19C16.121 19 15 17.879 15 16.5Z","key":"3"})
  );
});

MobileUserNotch.displayName = 'MobileUserNotch';

module.exports = MobileUserNotch;
module.exports.MobileUserNotch = MobileUserNotch;
module.exports.default = MobileUserNotch;
