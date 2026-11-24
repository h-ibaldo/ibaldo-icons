'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ReceiptRupeeWavy = forwardRef(function ReceiptRupeeWavy(
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
    createElement(Path, {"d":"M4 22L6 20L8 22L10 20L12 22L14 20L16 22L18 20L20 22L20 2L4 2Z","key":"0"}),
    createElement(Path, {"d":"M8 6C10.211 6 12 7.789 12 10C12 12.211 10.211 14 8 14","key":"1"}),
    createElement(Path, {"d":"M8 10L16 10","key":"2"}),
    createElement(Path, {"d":"M8 6L16 6","key":"3"}),
    createElement(Path, {"d":"M8 14L12 16","key":"4"})
  );
});

ReceiptRupeeWavy.displayName = 'ReceiptRupeeWavy';

module.exports = ReceiptRupeeWavy;
module.exports.ReceiptRupeeWavy = ReceiptRupeeWavy;
module.exports.default = ReceiptRupeeWavy;
