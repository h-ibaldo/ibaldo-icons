'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CoinDollar = forwardRef(function CoinDollar(
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
    createElement(Path, {"d":"M14.387 8C13.84 7.395 12.977 7 12 7C10.344 7 9 8.117 9 9.5C9 10.883 10.344 12 12 12","key":"0"}),
    createElement(Path, {"d":"M9.613 16C10.16 16.605 11.023 17 12 17C13.656 17 15 15.883 15 14.5C15 13.117 13.656 12 12 12","key":"1"}),
    createElement(Path, {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"2"}),
    createElement(Path, {"d":"M12 6L12 6","key":"3"}),
    createElement(Path, {"d":"M12 18L12 18","key":"4"})
  );
});

CoinDollar.displayName = 'CoinDollar';

module.exports = CoinDollar;
module.exports.CoinDollar = CoinDollar;
module.exports.default = CoinDollar;
