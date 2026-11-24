'use strict';

const { createElement, forwardRef } = require('react');

const ArrowDownLeftNarrow = forwardRef(function ArrowDownLeftNarrow(
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
    createElement('path', {"d":"M13 18L6 18L6 11","key":"0"}),
    createElement('path', {"d":"M6 18L18 6","key":"1"})
  );
});

ArrowDownLeftNarrow.displayName = 'ArrowDownLeftNarrow';

module.exports = ArrowDownLeftNarrow;
module.exports.ArrowDownLeftNarrow = ArrowDownLeftNarrow;
module.exports.default = ArrowDownLeftNarrow;
