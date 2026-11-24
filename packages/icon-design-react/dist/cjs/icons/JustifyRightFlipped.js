'use strict';

const { createElement, forwardRef } = require('react');

const JustifyRightFlipped = forwardRef(function JustifyRightFlipped(
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
    createElement('path', {"d":"M22 22L22 2","key":"0"}),
    createElement('path', {"d":"M7 16L3 16C2.449 16 2 15.551 2 15L2 9C2 8.449 2.449 8 3 8L7 8C7.551 8 8 8.449 8 9L8 15C8 15.551 7.551 16 7 16Z","key":"1"}),
    createElement('path', {"d":"M17 18L13 18C12.449 18 12 17.551 12 17L12 7C12 6.449 12.449 6 13 6L17 6C17.551 6 18 6.449 18 7L18 17C18 17.551 17.551 18 17 18Z","key":"2"})
  );
});

JustifyRightFlipped.displayName = 'JustifyRightFlipped';

module.exports = JustifyRightFlipped;
module.exports.JustifyRightFlipped = JustifyRightFlipped;
module.exports.default = JustifyRightFlipped;
