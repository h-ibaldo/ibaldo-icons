'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChevronUpSmall = forwardRef(function ChevronUpSmall(
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
    createElement(Path, {"d":"M9 13L12 10L15 13","key":"0"})
  );
});

ChevronUpSmall.displayName = 'ChevronUpSmall';

module.exports = ChevronUpSmall;
module.exports.ChevronUpSmall = ChevronUpSmall;
module.exports.default = ChevronUpSmall;
