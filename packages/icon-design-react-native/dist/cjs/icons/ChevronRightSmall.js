'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChevronRightSmall = forwardRef(function ChevronRightSmall(
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
    createElement(Path, {"d":"M11 15L14 12L11 9","key":"0"})
  );
});

ChevronRightSmall.displayName = 'ChevronRightSmall';

module.exports = ChevronRightSmall;
module.exports.ChevronRightSmall = ChevronRightSmall;
module.exports.default = ChevronRightSmall;
