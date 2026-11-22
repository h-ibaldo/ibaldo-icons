'use strict';

const { createElement, forwardRef } = require('react');

const FlipVerticalInDashed = forwardRef(function FlipVerticalInDashed(
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
    createElement('path', {"d":"M2 12L4 12","key":"0"}),
    createElement('path', {"d":"M8 12L10 12","key":"1"}),
    createElement('path', {"d":"M14 12L16 12","key":"2"}),
    createElement('path', {"d":"M20 12L22 12","key":"3"}),
    createElement('path', {"d":"M16 2L8 2L12 7Z","key":"4"}),
    createElement('path', {"d":"M8 22L16 22L12 17Z","key":"5"})
  );
});

FlipVerticalInDashed.displayName = 'FlipVerticalInDashed';

module.exports = FlipVerticalInDashed;
module.exports.FlipVerticalInDashed = FlipVerticalInDashed;
module.exports.default = FlipVerticalInDashed;
