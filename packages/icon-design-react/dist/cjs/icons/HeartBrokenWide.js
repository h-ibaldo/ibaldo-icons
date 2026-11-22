'use strict';

const { createElement, forwardRef } = require('react');

const HeartBrokenWide = forwardRef(function HeartBrokenWide(
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
    createElement('path', {"d":"M20.09 6.078C18.098 4.434 15.129 4.73 13.301 6.559L11.949 7.906L10.602 6.559C8.773 4.73 5.805 4.434 3.809 6.078C1.523 7.969 1.402 11.359 3.449 13.406C4.449 14.406 5.527 15.32 6.676 16.141L11.949 19.906L17.223 16.141C18.371 15.32 19.453 14.406 20.449 13.406C22.496 11.359 22.375 7.969 20.09 6.078Z","key":"0"}),
    createElement('path', {"d":"M11.949 7.906L10 10L15 11L12 15","key":"1"})
  );
});

HeartBrokenWide.displayName = 'HeartBrokenWide';

module.exports = HeartBrokenWide;
module.exports.HeartBrokenWide = HeartBrokenWide;
module.exports.default = HeartBrokenWide;
