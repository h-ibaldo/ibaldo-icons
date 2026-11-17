'use strict';

const { createElement, forwardRef } = require('react');

const RecordRingSquare = forwardRef(function RecordRingSquare(
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
    createElement('path', {"d":"M14 12C14 9.789 12.211 8 10 8C7.789 8 6 9.789 6 12C6 14.211 7.789 16 10 16C12.211 16 14 14.211 14 12Z","key":"0"}),
    createElement('path', {"d":"M16.922 16C17.602 14.82 18 13.461 18 12C18 10.539 17.602 9.18 16.922 8","key":"1"}),
    createElement('path', {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z","key":"2"})
  );
});

RecordRingSquare.displayName = 'RecordRingSquare';

module.exports = RecordRingSquare;
module.exports.RecordRingSquare = RecordRingSquare;
module.exports.default = RecordRingSquare;
