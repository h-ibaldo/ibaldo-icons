'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ReceiptListWavy = forwardRef(function ReceiptListWavy(
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
    createElement(Path, {"d":"M8 7L12 7","key":"1"}),
    createElement(Path, {"d":"M15 7L16 7","key":"2"}),
    createElement(Path, {"d":"M8 11L12 11","key":"3"}),
    createElement(Path, {"d":"M15 11L16 11","key":"4"}),
    createElement(Path, {"d":"M8 15L12 15","key":"5"}),
    createElement(Path, {"d":"M15 15L16 15","key":"6"})
  );
});

ReceiptListWavy.displayName = 'ReceiptListWavy';

module.exports = ReceiptListWavy;
module.exports.ReceiptListWavy = ReceiptListWavy;
module.exports.default = ReceiptListWavy;
