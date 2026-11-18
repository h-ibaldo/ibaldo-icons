'use strict';

const { createElement, forwardRef } = require('react');

const GaugeFlatCircleLarge = forwardRef(function GaugeFlatCircleLarge(
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
    createElement('path', {"d":"M13 12C13 11.445 12.551 11 12 11C11.449 11 11 11.445 11 12C11 12.555 11.449 13 12 13C12.551 13 13 12.555 13 12Z","key":"1"}),
    createElement('path', {"d":"M16.5 7.5L12 12","key":"2"}),
    createElement('path', {"d":"M13 5.078C12.672 5.031 12.34 5 12 5C8.133 5 5 8.133 5 12C5 13.961 5.809 15.73 7.105 17L16.895 17C18.191 15.73 19 13.961 19 12C19 11.66 18.969 11.328 18.922 11","key":"3"})
  );
});

GaugeFlatCircleLarge.displayName = 'GaugeFlatCircleLarge';

module.exports = GaugeFlatCircleLarge;
module.exports.GaugeFlatCircleLarge = GaugeFlatCircleLarge;
module.exports.default = GaugeFlatCircleLarge;
