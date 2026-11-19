'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChevronUpRightSmall = forwardRef(function ChevronUpRightSmall(
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
    createElement(Path, {"d":"M14 15L14 10L9 10","key":"0"})
  );
});

ChevronUpRightSmall.displayName = 'ChevronUpRightSmall';

module.exports = ChevronUpRightSmall;
module.exports.ChevronUpRightSmall = ChevronUpRightSmall;
module.exports.default = ChevronUpRightSmall;
