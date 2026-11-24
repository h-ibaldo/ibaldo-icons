'use strict';

const { createElement, forwardRef } = require('react');

const SquareDot = forwardRef(function SquareDot(
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
    createElement('path', {"d":"M20 13L20 19C20 20.656 18.656 22 17 22L5 22C3.344 22 2 20.656 2 19L2 7C2 5.344 3.344 4 5 4L11 4","key":"0"}),
    createElement('path', {"d":"M15 5.5C15 7.434 16.566 9 18.5 9C20.434 9 22 7.434 22 5.5C22 3.566 20.434 2 18.5 2C16.566 2 15 3.566 15 5.5Z","key":"1"})
  );
});

SquareDot.displayName = 'SquareDot';

module.exports = SquareDot;
module.exports.SquareDot = SquareDot;
module.exports.default = SquareDot;
