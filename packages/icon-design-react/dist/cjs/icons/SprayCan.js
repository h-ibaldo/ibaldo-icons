'use strict';

const { createElement, forwardRef } = require('react');

const SprayCan = forwardRef(function SprayCan(
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
    createElement('path', {"d":"M3 22L3 13.461C3 11.551 4.477 10 6.301 10L10.699 10C12.523 10 14 11.551 14 13.461L14 22","key":"0"}),
    createElement('path', {"d":"M10 8L10 5L7 5L7 8Z","key":"1"}),
    createElement('path', {"d":"M2 15L15 15","key":"2"}),
    createElement('path', {"d":"M16 5L16 5","key":"3"}),
    createElement('path', {"d":"M13 6L13 6","key":"4"}),
    createElement('path', {"d":"M19 6L19 6","key":"5"}),
    createElement('path', {"d":"M19 3L19 3","key":"6"}),
    createElement('path', {"d":"M22 5L22 5","key":"7"}),
    createElement('path', {"d":"M22 2L22 2","key":"8"}),
    createElement('path', {"d":"M22 8L22 8","key":"9"}),
    createElement('path', {"d":"M16 8L16 8","key":"10"}),
    createElement('path', {"d":"M22 11L22 11","key":"11"}),
    createElement('path', {"d":"M19 9L19 9","key":"12"})
  );
});

SprayCan.displayName = 'SprayCan';

module.exports = SprayCan;
module.exports.SprayCan = SprayCan;
module.exports.default = SprayCan;
