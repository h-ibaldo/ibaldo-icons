'use strict';

const { createElement, forwardRef } = require('react');

const ArrowLeftNarrow = forwardRef(function ArrowLeftNarrow(
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
    createElement('path', {"d":"M9 7L4 12L9 17","key":"0"}),
    createElement('path', {"d":"M20 12L4 12","key":"1"})
  );
});

ArrowLeftNarrow.displayName = 'ArrowLeftNarrow';

module.exports = ArrowLeftNarrow;
module.exports.ArrowLeftNarrow = ArrowLeftNarrow;
module.exports.default = ArrowLeftNarrow;
