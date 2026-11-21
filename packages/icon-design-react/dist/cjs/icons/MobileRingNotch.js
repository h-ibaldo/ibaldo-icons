'use strict';

const { createElement, forwardRef } = require('react');

const MobileRingNotch = forwardRef(function MobileRingNotch(
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
    createElement('path', {"d":"M14 17.043L14 20C14 21.105 13.105 22 12 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L12 2C13.105 2 14 2.895 14 4L14 7.043","key":"0"}),
    createElement('path', {"d":"M9 5L8 5","key":"1"}),
    createElement('path', {"d":"M15 10.793C15.781 11.574 15.781 12.84 15 13.621","key":"2"}),
    createElement('path', {"d":"M17 9C18.77 10.77 18.77 13.645 17 15.414","key":"3"}),
    createElement('path', {"d":"M19 7.105C21.82 9.922 21.82 14.492 19 17.313","key":"4"})
  );
});

MobileRingNotch.displayName = 'MobileRingNotch';

module.exports = MobileRingNotch;
module.exports.MobileRingNotch = MobileRingNotch;
module.exports.default = MobileRingNotch;
