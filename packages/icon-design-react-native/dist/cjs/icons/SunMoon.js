'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SunMoon = forwardRef(function SunMoon(
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
    createElement(Path, {"d":"M2 14.676C2 11.707 3.77 9.148 6.309 8C5.895 8.918 5.66 9.941 5.66 11.016C5.66 15.059 8.941 18.34 12.984 18.34C14.059 18.34 15.082 18.105 16 17.691C14.852 20.23 12.293 22 9.324 22C5.277 22 2 18.723 2 14.676Z","key":"0"}),
    createElement(Path, {"d":"M9.352 7.758C10.121 7.277 11.027 7 12 7C14.762 7 17 9.238 17 12C17 13.004 16.703 13.938 16.199 14.719","key":"1"}),
    createElement(Path, {"d":"M18 6L20 4","key":"2"}),
    createElement(Path, {"d":"M14 4L14 2","key":"3"}),
    createElement(Path, {"d":"M20 10L22 10","key":"4"})
  );
});

SunMoon.displayName = 'SunMoon';

module.exports = SunMoon;
module.exports.SunMoon = SunMoon;
module.exports.default = SunMoon;
