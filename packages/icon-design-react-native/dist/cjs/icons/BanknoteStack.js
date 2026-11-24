'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BanknoteStack = forwardRef(function BanknoteStack(
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
    createElement(Path, {"d":"M2 17L19 17L19 4L2 4Z","key":"0"}),
    createElement(Path, {"d":"M22 7L22 20L5 20","key":"1"}),
    createElement(Path, {"d":"M2 8C4.211 8 6 6.211 6 4","key":"2"}),
    createElement(Path, {"d":"M15 4C15 6.211 16.789 8 19 8","key":"3"}),
    createElement(Path, {"d":"M19 13C16.789 13 15 14.789 15 17","key":"4"}),
    createElement(Path, {"d":"M6 17C6 14.789 4.211 13 2 13","key":"5"}),
    createElement(Path, {"d":"M13 10.5C13 11.883 11.883 13 10.5 13C9.117 13 8 11.883 8 10.5C8 9.117 9.117 8 10.5 8C11.883 8 13 9.117 13 10.5Z","key":"6"})
  );
});

BanknoteStack.displayName = 'BanknoteStack';

module.exports = BanknoteStack;
module.exports.BanknoteStack = BanknoteStack;
module.exports.default = BanknoteStack;
