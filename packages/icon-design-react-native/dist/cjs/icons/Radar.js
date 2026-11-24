'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Radar = forwardRef(function Radar(
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
    createElement(Path, {"d":"M10.586 10.586C11.367 9.805 12.633 9.805 13.414 10.586C14.195 11.367 14.195 12.633 13.414 13.414C12.633 14.195 11.367 14.195 10.586 13.414C9.805 12.633 9.805 11.367 10.586 10.586Z","key":"0"}),
    createElement(Path, {"d":"M13.414 10.586L19.07 4.93","key":"1"}),
    createElement(Path, {"d":"M17.93 11.07C17.977 11.375 18 11.684 18 12C18 15.313 15.313 18 12 18C8.688 18 6 15.313 6 12C6 8.688 8.688 6 12 6C13.656 6 15.156 6.672 16.242 7.758","key":"2"}),
    createElement(Path, {"d":"M21.117 7.883C21.684 9.141 22 10.531 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C14.762 2 17.262 3.121 19.07 4.93","key":"3"})
  );
});

Radar.displayName = 'Radar';

module.exports = Radar;
module.exports.Radar = Radar;
module.exports.default = Radar;
