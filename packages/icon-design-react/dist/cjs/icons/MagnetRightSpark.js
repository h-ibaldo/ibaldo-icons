'use strict';

const { createElement, forwardRef } = require('react');

const MagnetRightSpark = forwardRef(function MagnetRightSpark(
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
    createElement('path', {"d":"M17 22L17 17","key":"0"}),
    createElement('path', {"d":"M17 7L17 2","key":"1"}),
    createElement('path', {"d":"M22 22L12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2L22 2L22 7L12 7C9.238 7 7 9.238 7 12C7 14.762 9.238 17 12 17L22 17Z","key":"2"}),
    createElement('path', {"d":"M14 11L17 13L19 11L22 13","key":"3"})
  );
});

MagnetRightSpark.displayName = 'MagnetRightSpark';

module.exports = MagnetRightSpark;
module.exports.MagnetRightSpark = MagnetRightSpark;
module.exports.default = MagnetRightSpark;
