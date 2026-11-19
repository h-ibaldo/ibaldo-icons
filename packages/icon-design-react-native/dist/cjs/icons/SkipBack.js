'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SkipBack = forwardRef(function SkipBack(
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
    createElement(Path, {"d":"M21 4.918L21 19.082C21 20.32 19.629 21.063 18.59 20.391L7.707 13.309C6.766 12.691 6.766 11.309 7.707 10.691L18.59 3.609C19.629 2.938 21 3.68 21 4.918Z","key":"0"}),
    createElement(Path, {"d":"M3 4L3 20","key":"1"})
  );
});

SkipBack.displayName = 'SkipBack';

module.exports = SkipBack;
module.exports.SkipBack = SkipBack;
module.exports.default = SkipBack;
