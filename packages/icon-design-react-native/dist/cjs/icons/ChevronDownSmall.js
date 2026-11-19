'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChevronDownSmall = forwardRef(function ChevronDownSmall(
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
    createElement(Path, {"d":"M9 11L12 14L15 11","key":"0"})
  );
});

ChevronDownSmall.displayName = 'ChevronDownSmall';

module.exports = ChevronDownSmall;
module.exports.ChevronDownSmall = ChevronDownSmall;
module.exports.default = ChevronDownSmall;
