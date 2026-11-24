'use strict';

const { createElement, forwardRef } = require('react');

const SortOneTwoDown = forwardRef(function SortOneTwoDown(
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
    createElement('path', {"d":"M6 3L7 3L7 10","key":"0"}),
    createElement('path', {"d":"M5 16C5 14.895 5.895 14 7 14C8.105 14 9 14.895 9 16L9 16.172C9 16.703 8.789 17.211 8.414 17.586L5 21L9 21","key":"1"}),
    createElement('path', {"d":"M17 6L17 18","key":"2"}),
    createElement('path', {"d":"M14 15L17 18L20 15","key":"3"})
  );
});

SortOneTwoDown.displayName = 'SortOneTwoDown';

module.exports = SortOneTwoDown;
module.exports.SortOneTwoDown = SortOneTwoDown;
module.exports.default = SortOneTwoDown;
