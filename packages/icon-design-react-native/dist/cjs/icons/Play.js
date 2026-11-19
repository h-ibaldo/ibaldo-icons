'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Play = forwardRef(function Play(
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
    createElement(Path, {"d":"M5 4.918L5 19.082C5 20.32 6.371 21.063 7.41 20.391L18.293 13.309C19.234 12.691 19.234 11.309 18.293 10.691L7.41 3.609C6.371 2.938 5 3.68 5 4.918Z","key":"0"})
  );
});

Play.displayName = 'Play';

module.exports = Play;
module.exports.Play = Play;
module.exports.default = Play;
