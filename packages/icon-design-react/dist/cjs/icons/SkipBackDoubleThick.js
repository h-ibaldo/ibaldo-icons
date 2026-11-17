'use strict';

const { createElement, forwardRef } = require('react');

const SkipBackDoubleThick = forwardRef(function SkipBackDoubleThick(
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
    createElement('path', {"d":"M3 5L5 5C5.551 5 6 5.449 6 6L6 18C6 18.551 5.551 19 5 19L3 19C2.449 19 2 18.551 2 18L2 6C2 5.449 2.449 5 3 5Z","key":"0"}),
    createElement('path', {"d":"M22 17.586L22 6.414C22 5.523 20.922 5.078 20.293 5.707L14 12L20.293 18.293C20.922 18.922 22 18.477 22 17.586Z","key":"1"}),
    createElement('path', {"d":"M14 17.586L14 6.414C14 5.523 12.922 5.078 12.293 5.707L6 12L12.293 18.293C12.922 18.922 14 18.477 14 17.586Z","key":"2"})
  );
});

SkipBackDoubleThick.displayName = 'SkipBackDoubleThick';

module.exports = SkipBackDoubleThick;
module.exports.SkipBackDoubleThick = SkipBackDoubleThick;
module.exports.default = SkipBackDoubleThick;
