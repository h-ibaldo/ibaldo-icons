'use strict';

const { createElement, forwardRef } = require('react');

const MicrophonePlayCircleBare = forwardRef(function MicrophonePlayCircleBare(
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
    createElement('path', {"d":"M9 19L9 22","key":"0"}),
    createElement('path', {"d":"M16 12.5L16 15.5L18.5 14Z","key":"1"}),
    createElement('path', {"d":"M22 14C22 11.238 19.762 9 17 9C14.238 9 12 11.238 12 14C12 16.762 14.238 19 17 19C19.762 19 22 16.762 22 14Z","key":"2"}),
    createElement('path', {"d":"M13 7L13 6C13 3.789 11.211 2 9 2C6.789 2 5 3.789 5 6L5 11C5 13.211 6.789 15 9 15","key":"3"}),
    createElement('path', {"d":"M2 15C3.383 17.387 5.949 19 8.906 19C9.277 19 9.645 18.977 10 18.926","key":"4"})
  );
});

MicrophonePlayCircleBare.displayName = 'MicrophonePlayCircleBare';

module.exports = MicrophonePlayCircleBare;
module.exports.MicrophonePlayCircleBare = MicrophonePlayCircleBare;
module.exports.default = MicrophonePlayCircleBare;
