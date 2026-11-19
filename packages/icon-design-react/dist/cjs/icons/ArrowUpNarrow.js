'use strict';

const { createElement, forwardRef } = require('react');

const ArrowUpNarrow = forwardRef(function ArrowUpNarrow(
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
    createElement('path', {"d":"M7 9L12 4L17 9","key":"0"}),
    createElement('path', {"d":"M12 4L12 20","key":"1"})
  );
});

ArrowUpNarrow.displayName = 'ArrowUpNarrow';

module.exports = ArrowUpNarrow;
module.exports.ArrowUpNarrow = ArrowUpNarrow;
module.exports.default = ArrowUpNarrow;
