'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ReceiptListRoll = forwardRef(function ReceiptListRoll(
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
    createElement(Path, {"d":"M8 7L12 7","key":"0"}),
    createElement(Path, {"d":"M15 7L16 7","key":"1"}),
    createElement(Path, {"d":"M8 11L12 11","key":"2"}),
    createElement(Path, {"d":"M15 11L16 11","key":"3"}),
    createElement(Path, {"d":"M8 15L12 15","key":"4"}),
    createElement(Path, {"d":"M15 15L16 15","key":"5"}),
    createElement(Path, {"d":"M2 2L22 2","key":"6"}),
    createElement(Path, {"d":"M4 2L4 22L8 20L12 22L16 20L20 22L20 2","key":"7"})
  );
});

ReceiptListRoll.displayName = 'ReceiptListRoll';

module.exports = ReceiptListRoll;
module.exports.ReceiptListRoll = ReceiptListRoll;
module.exports.default = ReceiptListRoll;
