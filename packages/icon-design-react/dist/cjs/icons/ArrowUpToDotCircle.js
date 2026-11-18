'use strict';

const { createElement, forwardRef } = require('react');

const ArrowUpToDotCircle = forwardRef(function ArrowUpToDotCircle(
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
    createElement('path', {"d":"M9 13L12 10L15 13","key":"0"}),
    createElement('path', {"d":"M12 17L12 10","key":"1"}),
    createElement('path', {"d":"M10 4C10 5.105 10.895 6 12 6C13.105 6 14 5.105 14 4C14 2.895 13.105 2 12 2C10.895 2 10 2.895 10 4Z","key":"2"}),
    createElement('path', {"d":"M6 4.016C3.574 5.84 2 8.73 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 8.73 20.426 5.84 18 4.016","key":"3"})
  );
});

ArrowUpToDotCircle.displayName = 'ArrowUpToDotCircle';

module.exports = ArrowUpToDotCircle;
module.exports.ArrowUpToDotCircle = ArrowUpToDotCircle;
module.exports.default = ArrowUpToDotCircle;
