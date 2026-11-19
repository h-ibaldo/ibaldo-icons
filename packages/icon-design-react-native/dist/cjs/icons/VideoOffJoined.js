'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const VideoOffJoined = forwardRef(function VideoOffJoined(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Path, {"d":"M5 2L17 22","key":"0"}),
    createElement(Path, {"d":"M15.18 18.965C15.641 18.879 16 18.488 16 18L16 14.25L20.379 17.719C21.035 18.234 22 17.77 22 16.934L22 7.066C22 6.23 21.035 5.766 20.379 6.281L16 9.75L16 7C16 5.895 15.105 5 14 5L6.801 5","key":"1"}),
    createElement(Path, {"d":"M2 6L2 17C2 18.105 2.895 19 4 19L10.199 19","key":"2"})
  );
});

VideoOffJoined.displayName = 'VideoOffJoined';

module.exports = VideoOffJoined;
module.exports.VideoOffJoined = VideoOffJoined;
module.exports.default = VideoOffJoined;
