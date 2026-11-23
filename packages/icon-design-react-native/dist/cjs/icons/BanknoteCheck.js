'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BanknoteCheck = forwardRef(function BanknoteCheck(
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
    createElement(Path, {"d":"M14 18L2 18L2 6L22 6L22 12","key":"0"}),
    createElement(Path, {"d":"M2 14L3 14C4.656 14 6 15.344 6 17L6 18","key":"1"}),
    createElement(Path, {"d":"M6 6L6 7C6 8.656 4.656 10 3 10L2 10","key":"2"}),
    createElement(Path, {"d":"M18 6L18 7C18 8.656 19.344 10 21 10L22 10","key":"3"}),
    createElement(Path, {"d":"M10 12C10 10.344 10.895 9 12 9C13.105 9 14 10.344 14 12C14 13.656 13.105 15 12 15C10.895 15 10 13.656 10 12Z","key":"4"}),
    createElement(Path, {"d":"M22 15L19 18L17 16","key":"5"})
  );
});

BanknoteCheck.displayName = 'BanknoteCheck';

module.exports = BanknoteCheck;
module.exports.BanknoteCheck = BanknoteCheck;
module.exports.default = BanknoteCheck;
