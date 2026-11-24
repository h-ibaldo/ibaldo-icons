'use strict';

const { createElement, forwardRef } = require('react');

const WebcamOffSquare = forwardRef(function WebcamOffSquare(
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
    createElement('path', {"d":"M4.352 4.352C4.98 2.965 6.379 2 8 2L16 2C18.211 2 20 3.789 20 6L20 13C20 14.898 18.676 16.492 16.898 16.898ZM12 17L8 17C5.789 17 4 15.211 4 13L4 9","key":"0"}),
    createElement('path', {"d":"M2 2L22 22","key":"1"}),
    createElement('path', {"d":"M10 9.5C10 8.395 10.895 7.5 12 7.5","key":"2"}),
    createElement('path', {"d":"M10 17L10 22","key":"3"}),
    createElement('path', {"d":"M14 19L14 22","key":"4"}),
    createElement('path', {"d":"M17 22L7 22","key":"5"}),
    createElement('path', {"d":"M7.824 7.824C8.488 6.168 10.105 5 12 5C14.484 5 16.5 7.016 16.5 9.5C16.5 11.391 15.332 13.012 13.676 13.676Z","key":"6"})
  );
});

WebcamOffSquare.displayName = 'WebcamOffSquare';

module.exports = WebcamOffSquare;
module.exports.WebcamOffSquare = WebcamOffSquare;
module.exports.default = WebcamOffSquare;
