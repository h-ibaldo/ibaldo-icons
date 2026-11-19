'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CropSquare = forwardRef(function CropSquare(
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
    createElement(Path, {"d":"M8 6L8 14C8 15.105 8.895 16 10 16L18 16","key":"0"}),
    createElement(Path, {"d":"M16 13L16 10C16 8.895 15.105 8 14 8L11 8","key":"1"}),
    createElement(Path, {"d":"M8 8L6 8","key":"2"}),
    createElement(Path, {"d":"M16 18L16 16","key":"3"}),
    createElement(Path, {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"4"})
  );
});

CropSquare.displayName = 'CropSquare';

module.exports = CropSquare;
module.exports.CropSquare = CropSquare;
module.exports.default = CropSquare;
