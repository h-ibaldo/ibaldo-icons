'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CursorSquare = forwardRef(function CursorSquare(
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
    createElement(Path, {"d":"M5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 19C2 20.656 3.344 22 5 22Z","key":"0"}),
    createElement(Path, {"d":"M14.395 17L11.789 14.395L9.617 16.566L7.023 7L16.566 9.617L14.395 11.789L17 14.395Z","key":"1"})
  );
});

CursorSquare.displayName = 'CursorSquare';

module.exports = CursorSquare;
module.exports.CursorSquare = CursorSquare;
module.exports.default = CursorSquare;
