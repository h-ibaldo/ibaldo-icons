'use strict';

const { createElement, forwardRef } = require('react');

const CursorUpRightSquare = forwardRef(function CursorUpRightSquare(
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
    createElement('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"0"}),
    createElement('path', {"d":"M7 14.395L9.605 11.789L7.438 9.617L16.977 7L14.383 16.566L12.211 14.395L9.605 17Z","key":"1"})
  );
});

CursorUpRightSquare.displayName = 'CursorUpRightSquare';

module.exports = CursorUpRightSquare;
module.exports.CursorUpRightSquare = CursorUpRightSquare;
module.exports.default = CursorUpRightSquare;
