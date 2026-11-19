'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUpLeftSquareLong = forwardRef(function ArrowUpLeftSquareLong(
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
    createElement(Path, {"d":"M4 22L20 22C21.105 22 22 21.105 22 20L22 4C22 2.895 21.105 2 20 2L4 2C2.895 2 2 2.895 2 4L2 20C2 21.105 2.895 22 4 22Z","key":"0"}),
    createElement(Path, {"d":"M14 7L7 7L7 14","key":"1"}),
    createElement(Path, {"d":"M17 17L7 7","key":"2"})
  );
});

ArrowUpLeftSquareLong.displayName = 'ArrowUpLeftSquareLong';

module.exports = ArrowUpLeftSquareLong;
module.exports.ArrowUpLeftSquareLong = ArrowUpLeftSquareLong;
module.exports.default = ArrowUpLeftSquareLong;
