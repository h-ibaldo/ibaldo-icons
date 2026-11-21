'use strict';

const { createElement, forwardRef } = require('react');

const Memory = forwardRef(function Memory(
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
    createElement('path', {"d":"M9 2L15 2C16.105 2 17 2.895 17 4L17 20C17 21.105 16.105 22 15 22L9 22C7.895 22 7 21.105 7 20L7 4C7 2.895 7.895 2 9 2Z","key":"0"}),
    createElement('path', {"d":"M17 6L20 6","key":"1"}),
    createElement('path', {"d":"M4 6L7 6","key":"2"}),
    createElement('path', {"d":"M17 10L20 10","key":"3"}),
    createElement('path', {"d":"M4 10L7 10","key":"4"}),
    createElement('path', {"d":"M17 14L20 14","key":"5"}),
    createElement('path', {"d":"M4 14L7 14","key":"6"}),
    createElement('path', {"d":"M17 18L20 18","key":"7"}),
    createElement('path', {"d":"M11 6L13 6","key":"8"}),
    createElement('path', {"d":"M11 10L13 10","key":"9"}),
    createElement('path', {"d":"M11 14L13 14","key":"10"}),
    createElement('path', {"d":"M11 18L13 18","key":"11"}),
    createElement('path', {"d":"M4 18L7 18","key":"12"})
  );
});

Memory.displayName = 'Memory';

module.exports = Memory;
module.exports.Memory = Memory;
module.exports.default = Memory;
