'use strict';

const { createElement, forwardRef } = require('react');

const ArrowRight = forwardRef(function ArrowRight(
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
    createElement('path', {"d":"M12 20L20 12L12 4","key":"0"}),
    createElement('path', {"d":"M20 12L4 12","key":"1"})
  );
});

ArrowRight.displayName = 'ArrowRight';

module.exports = ArrowRight;
module.exports.ArrowRight = ArrowRight;
module.exports.default = ArrowRight;
