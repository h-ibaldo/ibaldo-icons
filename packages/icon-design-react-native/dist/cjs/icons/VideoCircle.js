'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const VideoCircle = forwardRef(function VideoCircle(
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
    createElement(Path, {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement(Path, {"d":"M12.844 15L7.156 15C6.516 15 6 14.484 6 13.844L6 10.156C6 9.516 6.516 9 7.156 9L12.844 9C13.484 9 14 9.516 14 10.156L14 13.844C14 14.484 13.484 15 12.844 15Z","key":"1"}),
    createElement(Path, {"d":"M14 11L17.277 9.363C17.609 9.195 18 9.438 18 9.809L18 14.191C18 14.563 17.609 14.805 17.277 14.637L14 13","key":"2"})
  );
});

VideoCircle.displayName = 'VideoCircle';

module.exports = VideoCircle;
module.exports.VideoCircle = VideoCircle;
module.exports.default = VideoCircle;
