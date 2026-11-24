'use strict';

const { createElement, forwardRef } = require('react');

const TextAppCircle = forwardRef(function TextAppCircle(
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
    createElement('path', {"d":"M2 15L4 9L5.125 9L7 15","key":"0"}),
    createElement('path', {"d":"M10 13L12 13C13.105 13 14 12.105 14 11C14 9.895 13.105 9 12 9L10 9","key":"1"}),
    createElement('path', {"d":"M3 14L6 14","key":"2"}),
    createElement('path', {"d":"M10 9L10 15","key":"3"}),
    createElement('path', {"d":"M17 13L19 13C20.105 13 21 12.105 21 11C21 9.895 20.105 9 19 9L17 9","key":"4"}),
    createElement('path', {"d":"M17 9L17 15","key":"5"}),
    createElement('path', {"d":"M19.137 5C17.32 3.148 14.797 2 12 2C9.203 2 6.68 3.148 4.863 5","key":"6"}),
    createElement('path', {"d":"M4.863 19C6.68 20.852 9.203 22 12 22C14.797 22 17.32 20.852 19.137 19","key":"7"})
  );
});

TextAppCircle.displayName = 'TextAppCircle';

module.exports = TextAppCircle;
module.exports.TextAppCircle = TextAppCircle;
module.exports.default = TextAppCircle;
