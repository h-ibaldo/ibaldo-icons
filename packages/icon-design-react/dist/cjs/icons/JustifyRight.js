'use strict';

const { createElement, forwardRef } = require('react');

const JustifyRight = forwardRef(function JustifyRight(
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
    createElement('path', {"d":"M22 2L22 22","key":"0"}),
    createElement('path', {"d":"M13 8L17 8C17.551 8 18 8.449 18 9L18 15C18 15.551 17.551 16 17 16L13 16C12.449 16 12 15.551 12 15L12 9C12 8.449 12.449 8 13 8Z","key":"1"}),
    createElement('path', {"d":"M3 6L7 6C7.551 6 8 6.449 8 7L8 17C8 17.551 7.551 18 7 18L3 18C2.449 18 2 17.551 2 17L2 7C2 6.449 2.449 6 3 6Z","key":"2"})
  );
});

JustifyRight.displayName = 'JustifyRight';

module.exports = JustifyRight;
module.exports.JustifyRight = JustifyRight;
module.exports.default = JustifyRight;
