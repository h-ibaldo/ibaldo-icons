'use strict';

const { createElement, forwardRef } = require('react');

const CornersSquare = forwardRef(function CornersSquare(
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
    createElement('path', {"d":"M2 9L2 4C2 2.895 2.895 2 4 2L9 2","key":"0"}),
    createElement('path', {"d":"M15 2L20 2C21.105 2 22 2.895 22 4L22 9","key":"1"}),
    createElement('path', {"d":"M22 15L22 20C22 21.105 21.105 22 20 22L15 22","key":"2"}),
    createElement('path', {"d":"M4 22L8 22C9.105 22 10 21.105 10 20L10 16C10 14.895 9.105 14 8 14L4 14C2.895 14 2 14.895 2 16L2 20C2 21.105 2.895 22 4 22Z","key":"3"})
  );
});

CornersSquare.displayName = 'CornersSquare';

module.exports = CornersSquare;
module.exports.CornersSquare = CornersSquare;
module.exports.default = CornersSquare;
