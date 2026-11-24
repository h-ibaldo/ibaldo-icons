'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChevronDownRightSmall = forwardRef(function ChevronDownRightSmall(
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
    createElement(Path, {"d":"M14 9L14 14L9 14","key":"0"})
  );
});

ChevronDownRightSmall.displayName = 'ChevronDownRightSmall';

module.exports = ChevronDownRightSmall;
module.exports.ChevronDownRightSmall = ChevronDownRightSmall;
module.exports.default = ChevronDownRightSmall;
