'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChevronDownRight = forwardRef(function ChevronDownRight(
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
    createElement(Path, {"d":"M18 6L18 18L6 18","key":"0"})
  );
});

ChevronDownRight.displayName = 'ChevronDownRight';

module.exports = ChevronDownRight;
module.exports.ChevronDownRight = ChevronDownRight;
module.exports.default = ChevronDownRight;
