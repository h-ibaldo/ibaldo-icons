'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PrinterCheck = forwardRef(function PrinterCheck(
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
    createElement(Path, {"d":"M22 19L19 22L17 20","key":"0"}),
    createElement(Path, {"d":"M7 18L3 18C2.445 18 2 17.555 2 17L2 9C2 8.449 2.445 8 3 8L21 8C21.555 8 22 8.449 22 9L22 16","key":"1"}),
    createElement(Path, {"d":"M14 22L7 22L7 13","key":"2"}),
    createElement(Path, {"d":"M17 8L17 2L7 2L7 8","key":"3"}),
    createElement(Path, {"d":"M6 13L18 13","key":"4"})
  );
});

PrinterCheck.displayName = 'PrinterCheck';

module.exports = PrinterCheck;
module.exports.PrinterCheck = PrinterCheck;
module.exports.default = PrinterCheck;
