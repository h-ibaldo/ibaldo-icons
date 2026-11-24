'use strict';

const { createElement, forwardRef } = require('react');

const DivideCircle = forwardRef(function DivideCircle(
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
    createElement('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement('path', {"d":"M13 7C13 7.555 12.551 8 12 8C11.449 8 11 7.555 11 7C11 6.445 11.449 6 12 6C12.551 6 13 6.445 13 7Z","key":"1"}),
    createElement('path', {"d":"M13 17C13 17.555 12.551 18 12 18C11.449 18 11 17.555 11 17C11 16.445 11.449 16 12 16C12.551 16 13 16.445 13 17Z","key":"2"}),
    createElement('path', {"d":"M7 12L17 12","key":"3"})
  );
});

DivideCircle.displayName = 'DivideCircle';

module.exports = DivideCircle;
module.exports.DivideCircle = DivideCircle;
module.exports.default = DivideCircle;
