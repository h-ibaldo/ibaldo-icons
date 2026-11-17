'use strict';

const { createElement, forwardRef } = require('react');

const ClockCounterclockwiseBottom = forwardRef(function ClockCounterclockwiseBottom(
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
    createElement('path', {"d":"M20 22L20 18L16 18","key":"0"}),
    createElement('path', {"d":"M19.984 18C18.16 20.426 15.27 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 12.684 21.93 13.355 21.801 14","key":"1"}),
    createElement('path', {"d":"M12 7L12 12L17 12","key":"2"})
  );
});

ClockCounterclockwiseBottom.displayName = 'ClockCounterclockwiseBottom';

module.exports = ClockCounterclockwiseBottom;
module.exports.ClockCounterclockwiseBottom = ClockCounterclockwiseBottom;
module.exports.default = ClockCounterclockwiseBottom;
