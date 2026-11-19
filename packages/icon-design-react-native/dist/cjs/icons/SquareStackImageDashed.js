'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SquareStackImageDashed = forwardRef(function SquareStackImageDashed(
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
    createElement(Path, {"d":"M10 16L20 16C21.105 16 22 15.105 22 14L22 4C22 2.895 21.105 2 20 2L10 2C8.895 2 8 2.895 8 4L8 14C8 15.105 8.895 16 10 16Z","key":"0"}),
    createElement(Path, {"d":"M2 10C2 8.895 2.895 8 4 8","key":"1"}),
    createElement(Path, {"d":"M4 22C2.895 22 2 21.105 2 20","key":"2"}),
    createElement(Path, {"d":"M16 20C16 21.105 15.105 22 14 22","key":"3"}),
    createElement(Path, {"d":"M2 14L2 16","key":"4"}),
    createElement(Path, {"d":"M8 22L10 22","key":"5"}),
    createElement(Path, {"d":"M13 6.5C13 6.777 12.777 7 12.5 7C12.223 7 12 6.777 12 6.5C12 6.223 12.223 6 12.5 6C12.777 6 13 6.223 13 6.5Z","key":"6"}),
    createElement(Path, {"d":"M22 7C17.027 7 13 11.027 13 16","key":"7"})
  );
});

SquareStackImageDashed.displayName = 'SquareStackImageDashed';

module.exports = SquareStackImageDashed;
module.exports.SquareStackImageDashed = SquareStackImageDashed;
module.exports.default = SquareStackImageDashed;
