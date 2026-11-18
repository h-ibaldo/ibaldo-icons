'use strict';

const { createElement, forwardRef } = require('react');

const VideoLarge = forwardRef(function VideoLarge(
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
    createElement('path', {"d":"M13 18L3 18C2.449 18 2 17.551 2 17L2 7C2 6.449 2.449 6 3 6L13 6C13.551 6 14 6.449 14 7L14 17C14 17.551 13.551 18 13 18Z","key":"0"}),
    createElement('path', {"d":"M14 11L20.469 6.957C21.137 6.539 22 7.02 22 7.805L22 16.195C22 16.98 21.137 17.461 20.469 17.043L14 13Z","key":"1"})
  );
});

VideoLarge.displayName = 'VideoLarge';

module.exports = VideoLarge;
module.exports.VideoLarge = VideoLarge;
module.exports.default = VideoLarge;
