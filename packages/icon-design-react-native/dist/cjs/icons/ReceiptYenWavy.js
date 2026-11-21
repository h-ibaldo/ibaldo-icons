'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ReceiptYenWavy = forwardRef(function ReceiptYenWavy(
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
    createElement(Path, {"d":"M8 6L12 9L16 6","key":"1"}),
    createElement(Path, {"d":"M12 16L12 9","key":"2"}),
    createElement(Path, {"d":"M8 10L16 10","key":"3"}),
    createElement(Path, {"d":"M8 14L16 14","key":"4"})
  );
});

ReceiptYenWavy.displayName = 'ReceiptYenWavy';

module.exports = ReceiptYenWavy;
module.exports.ReceiptYenWavy = ReceiptYenWavy;
module.exports.default = ReceiptYenWavy;
