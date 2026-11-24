'use strict';

const { createElement, forwardRef } = require('react');

const ArrowDownNarrow = forwardRef(function ArrowDownNarrow(
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
    createElement('path', {"d":"M17 15L12 20L7 15","key":"0"}),
    createElement('path', {"d":"M12 20L12 4","key":"1"})
  );
});

ArrowDownNarrow.displayName = 'ArrowDownNarrow';

module.exports = ArrowDownNarrow;
module.exports.ArrowDownNarrow = ArrowDownNarrow;
module.exports.default = ArrowDownNarrow;
