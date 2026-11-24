'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Webcam = forwardRef(function Webcam(
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
    createElement(Path, {"d":"M4 10C4 5.582 7.582 2 12 2C16.418 2 20 5.582 20 10C20 14.418 16.418 18 12 18C7.582 18 4 14.418 4 10Z","key":"0"}),
    createElement(Path, {"d":"M8 10C8 7.789 9.789 6 12 6C14.211 6 16 7.789 16 10C16 12.211 14.211 14 12 14C9.789 14 8 12.211 8 10Z","key":"1"}),
    createElement(Path, {"d":"M11 10C11 9.449 11.449 9 12 9C12.551 9 13 9.449 13 10C13 10.551 12.551 11 12 11C11.449 11 11 10.551 11 10Z","key":"2"}),
    createElement(Path, {"d":"M17 17L18.184 18.973C18.98 20.305 18.023 22 16.469 22L7.531 22C5.977 22 5.02 20.305 5.816 18.973L7 17","key":"3"})
  );
});

Webcam.displayName = 'Webcam';

module.exports = Webcam;
module.exports.Webcam = Webcam;
module.exports.default = Webcam;
