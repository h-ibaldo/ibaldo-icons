'use strict';

const { createElement, forwardRef } = require('react');

const ClosedCaptionBoxy = forwardRef(function ClosedCaptionBoxy(
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
    createElement('path', {"d":"M19 20L5 20C3.344 20 2 18.656 2 17L2 7C2 5.344 3.344 4 5 4L19 4C20.656 4 22 5.344 22 7L22 17C22 18.656 20.656 20 19 20Z","key":"0"}),
    createElement('path', {"d":"M10.223 10C9.875 9.402 9.238 9 8.5 9C7.395 9 6.5 9.895 6.5 11L6.5 13C6.5 14.105 7.395 15 8.5 15C9.238 15 9.875 14.598 10.223 14","key":"1"}),
    createElement('path', {"d":"M17.5 10C17.152 9.402 16.516 9 15.777 9C14.672 9 13.777 9.895 13.777 11L13.777 13C13.777 14.105 14.672 15 15.777 15C16.516 15 17.152 14.598 17.5 14","key":"2"})
  );
});

ClosedCaptionBoxy.displayName = 'ClosedCaptionBoxy';

module.exports = ClosedCaptionBoxy;
module.exports.ClosedCaptionBoxy = ClosedCaptionBoxy;
module.exports.default = ClosedCaptionBoxy;
