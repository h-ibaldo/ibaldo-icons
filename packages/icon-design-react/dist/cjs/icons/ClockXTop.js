'use strict';

const { createElement, forwardRef } = require('react');

const ClockXTop = forwardRef(function ClockXTop(
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
    createElement('path', {"d":"M13 2.051C12.672 2.016 12.34 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 11.664 21.98 11.328 21.949 11","key":"0"}),
    createElement('path', {"d":"M12 7L12 12L17 14","key":"1"}),
    createElement('path', {"d":"M22 2L17 7","key":"2"}),
    createElement('path', {"d":"M17 2L22 7","key":"3"})
  );
});

ClockXTop.displayName = 'ClockXTop';

module.exports = ClockXTop;
module.exports.ClockXTop = ClockXTop;
module.exports.default = ClockXTop;
