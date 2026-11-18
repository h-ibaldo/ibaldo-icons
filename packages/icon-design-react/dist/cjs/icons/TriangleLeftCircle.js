'use strict';

const { createElement, forwardRef } = require('react');

const TriangleLeftCircle = forwardRef(function TriangleLeftCircle(
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
    createElement('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z","key":"0"}),
    createElement('path', {"d":"M15 15.195L15 8.805C15 8.02 14.137 7.539 13.469 7.957L8.355 11.152C7.73 11.543 7.73 12.457 8.355 12.848L13.469 16.043C14.137 16.461 15 15.98 15 15.195Z","key":"1"})
  );
});

TriangleLeftCircle.displayName = 'TriangleLeftCircle';

module.exports = TriangleLeftCircle;
module.exports.TriangleLeftCircle = TriangleLeftCircle;
module.exports.default = TriangleLeftCircle;
