'use strict';

const { createElement, forwardRef } = require('react');

const FlipHorizontal = forwardRef(function FlipHorizontal(
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
    createElement('path', {"d":"M12 2L12 22","key":"0"}),
    createElement('path', {"d":"M17 8L17 16L22 12Z","key":"1"}),
    createElement('path', {"d":"M7 16L7 8L2 12Z","key":"2"})
  );
});

FlipHorizontal.displayName = 'FlipHorizontal';

module.exports = FlipHorizontal;
module.exports.FlipHorizontal = FlipHorizontal;
module.exports.default = FlipHorizontal;
