'use strict';

const { createElement, forwardRef } = require('react');

const VideoOffLarge = forwardRef(function VideoOffLarge(
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
    createElement('path', {"d":"M14 11.5L20.469 7.457C21.137 7.039 22 7.52 22 8.305L22 16.695C22 17.48 21.137 17.961 20.469 17.543L14 13.5Z","key":"0"}),
    createElement('path', {"d":"M3 2.5L16 21.5","key":"1"}),
    createElement('path', {"d":"M13.727 18.176C13.895 18 14 17.766 14 17.5L14 7.5C14 6.949 13.551 6.5 13 6.5L5.738 6.5","key":"2"}),
    createElement('path', {"d":"M2 7.5L2 17.5C2 18.051 2.449 18.5 3 18.5L9 18.5","key":"3"})
  );
});

VideoOffLarge.displayName = 'VideoOffLarge';

module.exports = VideoOffLarge;
module.exports.VideoOffLarge = VideoOffLarge;
module.exports.default = VideoOffLarge;
