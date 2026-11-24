'use strict';

const { createElement, forwardRef } = require('react');

const WebcamWide = forwardRef(function WebcamWide(
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
    createElement('path', {"d":"M9 9C9 7.344 10.344 6 12 6C13.656 6 15 7.344 15 9C15 10.656 13.656 12 12 12C10.344 12 9 10.656 9 9Z","key":"0"}),
    createElement('path', {"d":"M2 12.191L2 7.488C2 6.605 2.578 5.828 3.426 5.574L9.125 3.863C11 3.301 13 3.301 14.875 3.863L20.574 5.574C21.422 5.828 22 6.605 22 7.488L22 12.191C22 13.219 21.223 14.078 20.199 14.18L17.969 14.402C14 14.801 10 14.801 6.031 14.402L3.801 14.18C2.777 14.078 2 13.219 2 12.191Z","key":"1"}),
    createElement('path', {"d":"M8.977 17.863L5.727 18.793C5.297 18.914 5 19.309 5 19.754L5 20C5 20.551 5.449 21 6 21L18 21C18.551 21 19 20.551 19 20L19 19.754C19 19.309 18.703 18.914 18.273 18.793L15.023 17.863C13.047 17.301 10.953 17.301 8.977 17.863Z","key":"2"})
  );
});

WebcamWide.displayName = 'WebcamWide';

module.exports = WebcamWide;
module.exports.WebcamWide = WebcamWide;
module.exports.default = WebcamWide;
