'use strict';

const { createElement, forwardRef } = require('react');

const ArrowUturnRightFlipped = forwardRef(function ArrowUturnRightFlipped(
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
    createElement('path', {"d":"M17 12L21 16L17 20","key":"0"}),
    createElement('path', {"d":"M21 16L9 16C5.688 16 3 13.313 3 10C3 6.688 5.688 4 9 4L12 4","key":"1"})
  );
});

ArrowUturnRightFlipped.displayName = 'ArrowUturnRightFlipped';

module.exports = ArrowUturnRightFlipped;
module.exports.ArrowUturnRightFlipped = ArrowUturnRightFlipped;
module.exports.default = ArrowUturnRightFlipped;
