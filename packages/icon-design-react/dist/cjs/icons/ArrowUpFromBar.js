'use strict';

const { createElement, forwardRef } = require('react');

const ArrowUpFromBar = forwardRef(function ArrowUpFromBar(
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
    createElement('path', {"d":"M8 7L12 3L16 7","key":"0"}),
    createElement('path', {"d":"M17 21L7 21","key":"1"}),
    createElement('path', {"d":"M12 3L12 21","key":"2"})
  );
});

ArrowUpFromBar.displayName = 'ArrowUpFromBar';

module.exports = ArrowUpFromBar;
module.exports.ArrowUpFromBar = ArrowUpFromBar;
module.exports.default = ArrowUpFromBar;
