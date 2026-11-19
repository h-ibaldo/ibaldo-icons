'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ReceiptDollarDotted = forwardRef(function ReceiptDollarDotted(
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
    createElement(Path, {"d":"M14 21L4 21","key":"0"}),
    createElement(Path, {"d":"M6 19L6 2L11 4L14 2L18 4L22 2L22 9","key":"1"}),
    createElement(Path, {"d":"M18 8L13 8","key":"2"}),
    createElement(Path, {"d":"M10 8L10 8","key":"3"}),
    createElement(Path, {"d":"M14.5 12L13 12","key":"4"}),
    createElement(Path, {"d":"M10 12L10 12","key":"5"}),
    createElement(Path, {"d":"M13.5 16L13 16","key":"6"}),
    createElement(Path, {"d":"M10 16L10 16","key":"7"}),
    createElement(Path, {"d":"M6 19C6 20.105 5.105 21 4 21C2.895 21 2 20.105 2 19","key":"8"}),
    createElement(Path, {"d":"M6 15L2 15L2 19","key":"9"}),
    createElement(Path, {"d":"M21 13.535L20.449 13.348C19.82 13.141 19.16 13.035 18.5 13.035C17.395 13.035 16.5 13.93 16.5 15.035C16.5 16.137 17.395 17.035 18.5 17.035L19.5 17.035C20.605 17.035 21.5 17.93 21.5 19.035C21.5 20.137 20.605 21.035 19.5 21.035C18.84 21.035 18.18 20.926 17.551 20.719L17 20.535","key":"10"}),
    createElement(Path, {"d":"M19 12.035L19 13.035","key":"11"}),
    createElement(Path, {"d":"M19 21.035L19 22.035","key":"12"})
  );
});

ReceiptDollarDotted.displayName = 'ReceiptDollarDotted';

module.exports = ReceiptDollarDotted;
module.exports.ReceiptDollarDotted = ReceiptDollarDotted;
module.exports.default = ReceiptDollarDotted;
