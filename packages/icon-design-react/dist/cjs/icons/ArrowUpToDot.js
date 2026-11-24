'use strict';

const { createElement, forwardRef } = require('react');

const ArrowUpToDot = forwardRef(function ArrowUpToDot(
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
    createElement('path', {"d":"M9 15L12 12L15 15","key":"0"}),
    createElement('path', {"d":"M12 22L12 12","key":"1"}),
    createElement('path', {"d":"M9 5C9 6.656 10.344 8 12 8C13.656 8 15 6.656 15 5C15 3.344 13.656 2 12 2C10.344 2 9 3.344 9 5Z","key":"2"})
  );
});

ArrowUpToDot.displayName = 'ArrowUpToDot';

module.exports = ArrowUpToDot;
module.exports.ArrowUpToDot = ArrowUpToDot;
module.exports.default = ArrowUpToDot;
