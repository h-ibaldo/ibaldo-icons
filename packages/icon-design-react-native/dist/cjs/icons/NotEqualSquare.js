'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const NotEqualSquare = forwardRef(function NotEqualSquare(
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
    createElement(Path, {"d":"M9 17L15 7","key":"0"}),
    createElement(Path, {"d":"M8 10L16 10","key":"1"}),
    createElement(Path, {"d":"M8 14L16 14","key":"2"}),
    createElement(Path, {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z","key":"3"})
  );
});

NotEqualSquare.displayName = 'NotEqualSquare';

module.exports = NotEqualSquare;
module.exports.NotEqualSquare = NotEqualSquare;
module.exports.default = NotEqualSquare;
