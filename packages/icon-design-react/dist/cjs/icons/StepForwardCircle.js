'use strict';

const { createElement, forwardRef } = require('react');

const StepForwardCircle = forwardRef(function StepForwardCircle(
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
    createElement('path', {"d":"M12 14.863L12 9.137C12 8.285 12.988 7.824 13.641 8.367L17.078 11.23C17.559 11.633 17.559 12.367 17.078 12.77L13.641 15.633C12.988 16.176 12 15.711 12 14.863Z","key":"1"}),
    createElement('path', {"d":"M8 16L8 8","key":"2"})
  );
});

StepForwardCircle.displayName = 'StepForwardCircle';

module.exports = StepForwardCircle;
module.exports.StepForwardCircle = StepForwardCircle;
module.exports.default = StepForwardCircle;
