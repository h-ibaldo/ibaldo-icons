'use strict';

const { createElement, forwardRef } = require('react');

const ArrowDownCircleOut = forwardRef(function ArrowDownCircleOut(
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
    createElement('path', {"d":"M15 18L12 21L9 18","key":"0"}),
    createElement('path', {"d":"M12 9L12 21","key":"1"}),
    createElement('path', {"d":"M6 20.98C3.574 19.156 2 16.27 2 13C2 7.477 6.477 3 12 3C17.523 3 22 7.477 22 13C22 16.27 20.426 19.156 18 20.98","key":"2"})
  );
});

ArrowDownCircleOut.displayName = 'ArrowDownCircleOut';

module.exports = ArrowDownCircleOut;
module.exports.ArrowDownCircleOut = ArrowDownCircleOut;
module.exports.default = ArrowDownCircleOut;
