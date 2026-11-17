'use strict';

const { createElement, forwardRef } = require('react');

const HourglassCircle = forwardRef(function HourglassCircle(
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
    createElement('path', {"d":"M15.199 9.598L12 12L8.801 9.598C8.297 9.223 8 8.629 8 8L8 7L16 7L16 8C16 8.629 15.703 9.223 15.199 9.598Z","key":"1"}),
    createElement('path', {"d":"M8.801 14.402L12 12L15.199 14.402C15.703 14.777 16 15.371 16 16L16 17L8 17L8 16C8 15.371 8.297 14.777 8.801 14.402Z","key":"2"})
  );
});

HourglassCircle.displayName = 'HourglassCircle';

module.exports = HourglassCircle;
module.exports.HourglassCircle = HourglassCircle;
module.exports.default = HourglassCircle;
