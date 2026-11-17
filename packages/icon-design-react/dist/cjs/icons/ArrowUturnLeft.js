'use strict';

const { createElement, forwardRef } = require('react');

const ArrowUturnLeft = forwardRef(function ArrowUturnLeft(
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
    createElement('path', {"d":"M7 12L3 8L7 4","key":"0"}),
    createElement('path', {"d":"M3 8L15 8C18.313 8 21 10.688 21 14C21 17.313 18.313 20 15 20L12 20","key":"1"})
  );
});

ArrowUturnLeft.displayName = 'ArrowUturnLeft';

module.exports = ArrowUturnLeft;
module.exports.ArrowUturnLeft = ArrowUturnLeft;
module.exports.default = ArrowUturnLeft;
