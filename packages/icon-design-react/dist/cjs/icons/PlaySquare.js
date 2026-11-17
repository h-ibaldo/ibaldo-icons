'use strict';

const { createElement, forwardRef } = require('react');

const PlaySquare = forwardRef(function PlaySquare(
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
    createElement('path', {"d":"M8 7.766L8 16.234C8 17.012 8.848 17.492 9.516 17.09L16.57 12.855C17.219 12.469 17.219 11.531 16.57 11.141L9.516 6.91C8.848 6.508 8 6.988 8 7.766Z","key":"0"}),
    createElement('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"1"})
  );
});

PlaySquare.displayName = 'PlaySquare';

module.exports = PlaySquare;
module.exports.PlaySquare = PlaySquare;
module.exports.default = PlaySquare;
