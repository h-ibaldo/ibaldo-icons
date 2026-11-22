'use strict';

const { createElement, forwardRef } = require('react');

const JustifyBottom = forwardRef(function JustifyBottom(
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
    createElement('path', {"d":"M2 22L22 22","key":"0"}),
    createElement('path', {"d":"M8 7L8 3C8 2.449 8.449 2 9 2L15 2C15.551 2 16 2.449 16 3L16 7C16 7.551 15.551 8 15 8L9 8C8.449 8 8 7.551 8 7Z","key":"1"}),
    createElement('path', {"d":"M6 17L6 13C6 12.449 6.449 12 7 12L17 12C17.551 12 18 12.449 18 13L18 17C18 17.551 17.551 18 17 18L7 18C6.449 18 6 17.551 6 17Z","key":"2"})
  );
});

JustifyBottom.displayName = 'JustifyBottom';

module.exports = JustifyBottom;
module.exports.JustifyBottom = JustifyBottom;
module.exports.default = JustifyBottom;
