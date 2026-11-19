'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CheckboxCheckDashed = forwardRef(function CheckboxCheckDashed(
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
    createElement(Path, {"d":"M6 9L8 11L12 7","key":"0"}),
    createElement(Path, {"d":"M14 16L4 16C2.895 16 2 15.105 2 14L2 4C2 2.895 2.895 2 4 2L14 2C15.105 2 16 2.895 16 4L16 14C16 15.105 15.105 16 14 16Z","key":"1"}),
    createElement(Path, {"d":"M22 20L22 21C22 21.551 21.551 22 21 22L20 22","key":"2"}),
    createElement(Path, {"d":"M20 8L21 8C21.551 8 22 8.449 22 9L22 10","key":"3"}),
    createElement(Path, {"d":"M22 14L22 16","key":"4"}),
    createElement(Path, {"d":"M10 22L9 22C8.449 22 8 21.551 8 21L8 20","key":"5"}),
    createElement(Path, {"d":"M16 22L14 22","key":"6"})
  );
});

CheckboxCheckDashed.displayName = 'CheckboxCheckDashed';

module.exports = CheckboxCheckDashed;
module.exports.CheckboxCheckDashed = CheckboxCheckDashed;
module.exports.default = CheckboxCheckDashed;
