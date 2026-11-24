'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Printer = forwardRef(function Printer(
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
    createElement(Path, {"d":"M7 18L3 18C2.445 18 2 17.555 2 17L2 9C2 8.449 2.445 8 3 8L21 8C21.555 8 22 8.449 22 9L22 17C22 17.555 21.555 18 21 18L17 18","key":"0"}),
    createElement(Path, {"d":"M17 13L17 22L7 22L7 13","key":"1"}),
    createElement(Path, {"d":"M17 8L17 2L7 2L7 8","key":"2"}),
    createElement(Path, {"d":"M6 13L18 13","key":"3"})
  );
});

Printer.displayName = 'Printer';

module.exports = Printer;
module.exports.Printer = Printer;
module.exports.default = Printer;
