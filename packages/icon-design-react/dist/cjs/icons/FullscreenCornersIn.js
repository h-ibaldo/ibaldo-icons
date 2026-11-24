'use strict';

const { createElement, forwardRef } = require('react');

const FullscreenCornersIn = forwardRef(function FullscreenCornersIn(
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
    createElement('path', {"d":"M7 2L7 7L2 7","key":"0"}),
    createElement('path', {"d":"M17 22L17 17L22 17","key":"1"}),
    createElement('path', {"d":"M2 17L7 17L7 22","key":"2"}),
    createElement('path', {"d":"M22 7L17 7L17 2","key":"3"})
  );
});

FullscreenCornersIn.displayName = 'FullscreenCornersIn';

module.exports = FullscreenCornersIn;
module.exports.FullscreenCornersIn = FullscreenCornersIn;
module.exports.default = FullscreenCornersIn;
