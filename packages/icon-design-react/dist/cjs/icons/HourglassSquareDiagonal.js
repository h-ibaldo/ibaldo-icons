'use strict';

const { createElement, forwardRef } = require('react');

const HourglassSquareDiagonal = forwardRef(function HourglassSquareDiagonal(
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
    createElement('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"0"}),
    createElement('path', {"d":"M12 12L14.414 14.414C14.789 14.789 15 15.297 15 15.828L15 17L9 17L9 15.828C9 15.297 9.211 14.789 9.586 14.414L10 14","key":"1"}),
    createElement('path', {"d":"M12 12L9.586 9.586C9.211 9.211 9 8.703 9 8.172L9 7L15 7L15 8.172C15 8.703 14.789 9.211 14.414 9.586L14 10","key":"2"})
  );
});

HourglassSquareDiagonal.displayName = 'HourglassSquareDiagonal';

module.exports = HourglassSquareDiagonal;
module.exports.HourglassSquareDiagonal = HourglassSquareDiagonal;
module.exports.default = HourglassSquareDiagonal;
