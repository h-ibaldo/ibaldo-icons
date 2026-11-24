'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ReceiptDollarWavy = forwardRef(function ReceiptDollarWavy(
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
    createElement(Path, {"d":"M14 7L11 7C9.895 7 9 7.895 9 9C9 10.105 9.895 11 11 11L13 11C14.105 11 15 11.895 15 13C15 14.105 14.105 15 13 15L10 15","key":"1"}),
    createElement(Path, {"d":"M12 5L12 7","key":"2"}),
    createElement(Path, {"d":"M12 15L12 17","key":"3"})
  );
});

ReceiptDollarWavy.displayName = 'ReceiptDollarWavy';

module.exports = ReceiptDollarWavy;
module.exports.ReceiptDollarWavy = ReceiptDollarWavy;
module.exports.default = ReceiptDollarWavy;
