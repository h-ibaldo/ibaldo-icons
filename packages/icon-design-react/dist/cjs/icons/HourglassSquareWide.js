'use strict';

const { createElement, forwardRef } = require('react');

const HourglassSquareWide = forwardRef(function HourglassSquareWide(
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
    createElement('path', {"d":"M16 7L8 7L8 7.758C8 8.555 8.316 9.316 8.879 9.879L10.293 11.293C10.684 11.684 10.684 12.316 10.293 12.707L8.879 14.121C8.316 14.684 8 15.445 8 16.242L8 17L16 17L16 16.242C16 15.445 15.684 14.684 15.121 14.121L13.707 12.707C13.316 12.316 13.316 11.684 13.707 11.293L15.121 9.879C15.684 9.316 16 8.555 16 7.758Z","key":"1"})
  );
});

HourglassSquareWide.displayName = 'HourglassSquareWide';

module.exports = HourglassSquareWide;
module.exports.HourglassSquareWide = HourglassSquareWide;
module.exports.default = HourglassSquareWide;
