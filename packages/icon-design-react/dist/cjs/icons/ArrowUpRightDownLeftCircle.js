'use strict';

const { createElement, forwardRef } = require('react');

const ArrowUpRightDownLeftCircle = forwardRef(function ArrowUpRightDownLeftCircle(
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
    createElement('path', {"d":"M2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12Z","key":"0"}),
    createElement('path', {"d":"M9 7L12 7L12 10","key":"1"}),
    createElement('path', {"d":"M7 12L12 7","key":"2"}),
    createElement('path', {"d":"M15 17L12 17L12 14","key":"3"}),
    createElement('path', {"d":"M17 12L12 17","key":"4"})
  );
});

ArrowUpRightDownLeftCircle.displayName = 'ArrowUpRightDownLeftCircle';

module.exports = ArrowUpRightDownLeftCircle;
module.exports.ArrowUpRightDownLeftCircle = ArrowUpRightDownLeftCircle;
module.exports.default = ArrowUpRightDownLeftCircle;
