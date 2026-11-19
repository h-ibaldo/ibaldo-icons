'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChevronDownRightCircle = forwardRef(function ChevronDownRightCircle(
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
    createElement(Path, {"d":"M2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12Z","key":"0"}),
    createElement(Path, {"d":"M14 9L14 14L9 14","key":"1"})
  );
});

ChevronDownRightCircle.displayName = 'ChevronDownRightCircle';

module.exports = ChevronDownRightCircle;
module.exports.ChevronDownRightCircle = ChevronDownRightCircle;
module.exports.default = ChevronDownRightCircle;
