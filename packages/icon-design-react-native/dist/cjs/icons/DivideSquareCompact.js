'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const DivideSquareCompact = forwardRef(function DivideSquareCompact(
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
    createElement(Path, {"d":"M2 5L2 19C2 20.656 3.344 22 5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"0"}),
    createElement(Path, {"d":"M12 8L12 8","key":"1"}),
    createElement(Path, {"d":"M12 16L12 16","key":"2"}),
    createElement(Path, {"d":"M8 12L16 12","key":"3"})
  );
});

DivideSquareCompact.displayName = 'DivideSquareCompact';

module.exports = DivideSquareCompact;
module.exports.DivideSquareCompact = DivideSquareCompact;
module.exports.default = DivideSquareCompact;
