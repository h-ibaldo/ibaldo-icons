'use strict';

const { createElement, forwardRef } = require('react');

const ArrowRightToDot = forwardRef(function ArrowRightToDot(
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
    createElement('path', {"d":"M9 9L12 12L9 15","key":"0"}),
    createElement('path', {"d":"M2 12L12 12","key":"1"}),
    createElement('path', {"d":"M19 9C17.344 9 16 10.344 16 12C16 13.656 17.344 15 19 15C20.656 15 22 13.656 22 12C22 10.344 20.656 9 19 9Z","key":"2"})
  );
});

ArrowRightToDot.displayName = 'ArrowRightToDot';

module.exports = ArrowRightToDot;
module.exports.ArrowRightToDot = ArrowRightToDot;
module.exports.default = ArrowRightToDot;
