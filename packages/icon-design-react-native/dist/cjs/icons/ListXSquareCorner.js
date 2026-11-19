'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ListXSquareCorner = forwardRef(function ListXSquareCorner(
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
    createElement(Path, {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z","key":"0"}),
    createElement(Path, {"d":"M18 15L14.5 18.5","key":"1"}),
    createElement(Path, {"d":"M14.5 15L18 18.5","key":"2"}),
    createElement(Path, {"d":"M17 11L7 11","key":"3"}),
    createElement(Path, {"d":"M11 15L7 15","key":"4"}),
    createElement(Path, {"d":"M17 7L7 7","key":"5"})
  );
});

ListXSquareCorner.displayName = 'ListXSquareCorner';

module.exports = ListXSquareCorner;
module.exports.ListXSquareCorner = ListXSquareCorner;
module.exports.default = ListXSquareCorner;
