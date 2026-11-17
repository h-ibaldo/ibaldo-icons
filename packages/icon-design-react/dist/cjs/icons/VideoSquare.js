'use strict';

const { createElement, forwardRef } = require('react');

const VideoSquare = forwardRef(function VideoSquare(
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
    createElement('path', {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z","key":"0"}),
    createElement('path', {"d":"M12.844 15L7.156 15C6.516 15 6 14.484 6 13.844L6 10.156C6 9.516 6.516 9 7.156 9L12.844 9C13.484 9 14 9.516 14 10.156L14 13.844C14 14.484 13.484 15 12.844 15Z","key":"1"}),
    createElement('path', {"d":"M14 11L18 9L18 15L14 13","key":"2"})
  );
});

VideoSquare.displayName = 'VideoSquare';

module.exports = VideoSquare;
module.exports.VideoSquare = VideoSquare;
module.exports.default = VideoSquare;
