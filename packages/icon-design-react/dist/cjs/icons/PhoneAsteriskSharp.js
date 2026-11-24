'use strict';

const { createElement, forwardRef } = require('react');

const PhoneAsteriskSharp = forwardRef(function PhoneAsteriskSharp(
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
    createElement('path', {"d":"M6.914 9L6.953 9.113C8.25 12.828 11.188 15.738 14.914 17","key":"0"}),
    createElement('path', {"d":"M15.008 14L16.914 13L21.914 16L21.18 19.66C21.012 20.508 20.461 21.227 19.691 21.609C19.184 21.863 18.613 21.957 18.051 21.875L16.418 21.645C13.469 21.223 10.688 20.02 8.359 18.156C7.398 17.387 6.523 16.516 5.754 15.555C3.895 13.227 2.691 10.445 2.27 7.496L2.035 5.863C1.957 5.301 2.047 4.727 2.301 4.219C2.688 3.449 3.406 2.902 4.25 2.73L7.914 2L10.914 7L10.008 8","key":"1"}),
    createElement('path', {"d":"M18.5 2L18.5 10","key":"2"}),
    createElement('path', {"d":"M22 3.777L15 8.223","key":"3"}),
    createElement('path', {"d":"M15 3.777L22 8.223","key":"4"})
  );
});

PhoneAsteriskSharp.displayName = 'PhoneAsteriskSharp';

module.exports = PhoneAsteriskSharp;
module.exports.PhoneAsteriskSharp = PhoneAsteriskSharp;
module.exports.default = PhoneAsteriskSharp;
