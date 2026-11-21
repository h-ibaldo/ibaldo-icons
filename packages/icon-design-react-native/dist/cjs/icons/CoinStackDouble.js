'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CoinStackDouble = forwardRef(function CoinStackDouble(
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
    createElement(Path, {"d":"M13 6C13 7.656 10.539 9 7.5 9C4.461 9 2 7.656 2 6C2 4.344 4.461 3 7.5 3C10.539 3 13 4.344 13 6Z","key":"0"}),
    createElement(Path, {"d":"M13 6L13 10C13 11.656 10.539 13 7.5 13C4.461 13 2 11.656 2 10L2 6","key":"1"}),
    createElement(Path, {"d":"M13 10L13 14C13 15.656 10.539 17 7.5 17C4.461 17 2 15.656 2 14L2 10","key":"2"}),
    createElement(Path, {"d":"M13 14L13 18C13 19.656 10.539 21 7.5 21C4.461 21 2 19.656 2 18L2 14","key":"3"}),
    createElement(Path, {"d":"M13 14.316C13.949 14.742 15.172 15 16.5 15C19.539 15 22 13.656 22 12L22 8","key":"4"}),
    createElement(Path, {"d":"M13 18.316C13.949 18.742 15.172 19 16.5 19C19.539 19 22 17.656 22 16L22 12","key":"5"}),
    createElement(Path, {"d":"M13 10.316C13.949 10.742 15.172 11 16.5 11C19.539 11 22 9.656 22 8C22 6.344 19.539 5 16.5 5C15.172 5 13.949 5.258 13 5.684","key":"6"})
  );
});

CoinStackDouble.displayName = 'CoinStackDouble';

module.exports = CoinStackDouble;
module.exports.CoinStackDouble = CoinStackDouble;
module.exports.default = CoinStackDouble;
