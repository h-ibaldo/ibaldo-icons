'use strict';

const { createElement, forwardRef } = require('react');

const ArrowLeftToDotCircle = forwardRef(function ArrowLeftToDotCircle(
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
    createElement('path', {"d":"M13 15L10 12L13 9","key":"0"}),
    createElement('path', {"d":"M17 12L10 12","key":"1"}),
    createElement('path', {"d":"M4 14C5.105 14 6 13.105 6 12C6 10.895 5.105 10 4 10C2.895 10 2 10.895 2 12C2 13.105 2.895 14 4 14Z","key":"2"}),
    createElement('path', {"d":"M4.016 18C5.836 20.426 8.73 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C8.73 2 5.84 3.574 4.016 6","key":"3"})
  );
});

ArrowLeftToDotCircle.displayName = 'ArrowLeftToDotCircle';

module.exports = ArrowLeftToDotCircle;
module.exports.ArrowLeftToDotCircle = ArrowLeftToDotCircle;
module.exports.default = ArrowLeftToDotCircle;
