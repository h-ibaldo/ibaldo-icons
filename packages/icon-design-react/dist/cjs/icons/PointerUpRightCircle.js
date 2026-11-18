'use strict';

const { createElement, forwardRef } = require('react');

const PointerUpRightCircle = forwardRef(function PointerUpRightCircle(
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
    createElement('path', {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z","key":"0"}),
    createElement('path', {"d":"M15.969 8.789L13.367 16.59C13.207 17.074 12.547 17.148 12.285 16.711L10.41 13.59L7.289 11.715C6.852 11.449 6.922 10.793 7.41 10.633L15.211 8.031C15.68 7.875 16.125 8.32 15.969 8.789Z","key":"1"})
  );
});

PointerUpRightCircle.displayName = 'PointerUpRightCircle';

module.exports = PointerUpRightCircle;
module.exports.PointerUpRightCircle = PointerUpRightCircle;
module.exports.default = PointerUpRightCircle;
