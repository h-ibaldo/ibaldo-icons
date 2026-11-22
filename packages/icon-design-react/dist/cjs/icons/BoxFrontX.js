'use strict';

const { createElement, forwardRef } = require('react');

const BoxFrontX = forwardRef(function BoxFrontX(
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
    createElement('path', {"d":"M21 22L3 22C2.449 22 2 21.551 2 21L2 7.352C2 7.125 2.078 6.902 2.219 6.727L5.699 2.375C5.891 2.137 6.176 2 6.48 2L17.52 2C17.824 2 18.109 2.137 18.301 2.375L21.781 6.727C21.922 6.902 22 7.125 22 7.352L22 21C22 21.551 21.551 22 21 22Z","key":"0"}),
    createElement('path', {"d":"M2 8L22 8","key":"1"}),
    createElement('path', {"d":"M12 2L12 8","key":"2"}),
    createElement('path', {"d":"M10 13L14 17","key":"3"}),
    createElement('path', {"d":"M14 13L10 17","key":"4"})
  );
});

BoxFrontX.displayName = 'BoxFrontX';

module.exports = BoxFrontX;
module.exports.BoxFrontX = BoxFrontX;
module.exports.default = BoxFrontX;
