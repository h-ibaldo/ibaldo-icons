'use strict';

const { createElement, forwardRef } = require('react');

const ArrowUturnRight = forwardRef(function ArrowUturnRight(
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
    createElement('path', {"d":"M17 12L21 8L17 4","key":"0"}),
    createElement('path', {"d":"M21 8L9 8C5.688 8 3 10.688 3 14C3 17.313 5.688 20 9 20L12 20","key":"1"})
  );
});

ArrowUturnRight.displayName = 'ArrowUturnRight';

module.exports = ArrowUturnRight;
module.exports.ArrowUturnRight = ArrowUturnRight;
module.exports.default = ArrowUturnRight;
