'use strict';

const { createElement, forwardRef } = require('react');

const ArrowDownLeftCircleJoined = forwardRef(function ArrowDownLeftCircleJoined(
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
    createElement('path', {"d":"M14 15L9 15L9 10","key":"0"}),
    createElement('path', {"d":"M14.438 2.313C12.453 1.812 10.266 1.836 7.918 2.949C4.602 4.52 2.234 7.727 2.02 11.391C1.652 17.582 6.918 22.645 13.172 21.934C17.805 21.406 21.531 17.586 21.957 12.941C22.102 11.367 21.879 9.859 21.367 8.492C20.617 6.492 17.988 6.012 16.477 7.523L9 15","key":"1"})
  );
});

ArrowDownLeftCircleJoined.displayName = 'ArrowDownLeftCircleJoined';

module.exports = ArrowDownLeftCircleJoined;
module.exports.ArrowDownLeftCircleJoined = ArrowDownLeftCircleJoined;
module.exports.default = ArrowDownLeftCircleJoined;
