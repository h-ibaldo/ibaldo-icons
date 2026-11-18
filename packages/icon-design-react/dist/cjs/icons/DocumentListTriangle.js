'use strict';

const { createElement, forwardRef } = require('react');

const DocumentListTriangle = forwardRef(function DocumentListTriangle(
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
    createElement('path', {"d":"M8 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L19 2C20.105 2 21 2.895 21 4L21 11","key":"0"}),
    createElement('path', {"d":"M7 7L7 7","key":"1"}),
    createElement('path', {"d":"M17 7L11 7","key":"2"}),
    createElement('path', {"d":"M7 12L7 12","key":"3"}),
    createElement('path', {"d":"M13 12L11 12","key":"4"}),
    createElement('path', {"d":"M7 17L7 17","key":"5"}),
    createElement('path', {"d":"M13.648 22L20.352 22C21.516 22 22.238 20.727 21.637 19.727L18.285 14.145C17.703 13.172 16.297 13.172 15.715 14.145L12.363 19.727C11.762 20.727 12.484 22 13.648 22Z","key":"6"})
  );
});

DocumentListTriangle.displayName = 'DocumentListTriangle';

module.exports = DocumentListTriangle;
module.exports.DocumentListTriangle = DocumentListTriangle;
module.exports.default = DocumentListTriangle;
