'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChevronUpLeftSmall = forwardRef(function ChevronUpLeftSmall(
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
    createElement(Path, {"d":"M10 15L10 10L15 10","key":"0"})
  );
});

ChevronUpLeftSmall.displayName = 'ChevronUpLeftSmall';

module.exports = ChevronUpLeftSmall;
module.exports.ChevronUpLeftSmall = ChevronUpLeftSmall;
module.exports.default = ChevronUpLeftSmall;
