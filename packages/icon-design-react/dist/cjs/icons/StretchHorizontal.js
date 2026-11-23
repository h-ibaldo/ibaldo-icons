'use strict';

const { createElement, forwardRef } = require('react');

const StretchHorizontal = forwardRef(function StretchHorizontal(
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
    createElement('path', {"d":"M4 2L20 2C21.105 2 22 2.895 22 4L22 7C22 8.105 21.105 9 20 9L4 9C2.895 9 2 8.105 2 7L2 4C2 2.895 2.895 2 4 2Z","key":"0"}),
    createElement('path', {"d":"M4 15L20 15C21.105 15 22 15.895 22 17L22 20C22 21.105 21.105 22 20 22L4 22C2.895 22 2 21.105 2 20L2 17C2 15.895 2.895 15 4 15Z","key":"1"})
  );
});

StretchHorizontal.displayName = 'StretchHorizontal';

module.exports = StretchHorizontal;
module.exports.StretchHorizontal = StretchHorizontal;
module.exports.default = StretchHorizontal;
