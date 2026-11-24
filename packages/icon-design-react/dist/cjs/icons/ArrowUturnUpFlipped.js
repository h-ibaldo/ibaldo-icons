'use strict';

const { createElement, forwardRef } = require('react');

const ArrowUturnUpFlipped = forwardRef(function ArrowUturnUpFlipped(
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
    createElement('path', {"d":"M12 7L8 3L4 7","key":"0"}),
    createElement('path', {"d":"M8 3L8 15C8 18.313 10.688 21 14 21C17.313 21 20 18.313 20 15L20 12","key":"1"})
  );
});

ArrowUturnUpFlipped.displayName = 'ArrowUturnUpFlipped';

module.exports = ArrowUturnUpFlipped;
module.exports.ArrowUturnUpFlipped = ArrowUturnUpFlipped;
module.exports.default = ArrowUturnUpFlipped;
