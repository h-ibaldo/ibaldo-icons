'use strict';

const { createElement, forwardRef } = require('react');

const HourglassStandCircle = forwardRef(function HourglassStandCircle(
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
    createElement('path', {"d":"M15 7L15 8.93C15 9.598 14.664 10.223 14.109 10.594L12 12L9.891 10.594C9.336 10.223 9 9.598 9 8.93L9 7","key":"1"}),
    createElement('path', {"d":"M8 7L16 7","key":"2"}),
    createElement('path', {"d":"M9 17L9 15.07C9 14.402 9.336 13.777 9.891 13.406L12 12L14.109 13.406C14.664 13.777 15 14.402 15 15.07L15 17","key":"3"}),
    createElement('path', {"d":"M16 17L8 17","key":"4"})
  );
});

HourglassStandCircle.displayName = 'HourglassStandCircle';

module.exports = HourglassStandCircle;
module.exports.HourglassStandCircle = HourglassStandCircle;
module.exports.default = HourglassStandCircle;
