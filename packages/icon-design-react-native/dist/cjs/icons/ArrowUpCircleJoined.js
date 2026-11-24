'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUpCircleJoined = forwardRef(function ArrowUpCircleJoined(
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
    createElement(Path, {"d":"M9 13L12 10L15 13","key":"0"}),
    createElement(Path, {"d":"M17 20.652C20.254 18.766 22.352 15.109 21.949 10.996C21.5 6.367 17.762 2.574 13.141 2.063C7.105 1.395 2 6.102 2 12C2 15.992 4.34 19.438 7.723 21.039C9.707 21.98 12 20.516 12 18.32L12 10","key":"1"})
  );
});

ArrowUpCircleJoined.displayName = 'ArrowUpCircleJoined';

module.exports = ArrowUpCircleJoined;
module.exports.ArrowUpCircleJoined = ArrowUpCircleJoined;
module.exports.default = ArrowUpCircleJoined;
