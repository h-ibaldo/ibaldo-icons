'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ListXSquare = forwardRef(function ListXSquare(
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
    createElement(Path, {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"0"}),
    createElement(Path, {"d":"M13.5 10L17 6.5","key":"1"}),
    createElement(Path, {"d":"M17 10L13.5 6.5","key":"2"}),
    createElement(Path, {"d":"M7 14L17 14","key":"3"}),
    createElement(Path, {"d":"M7 10L10 10","key":"4"}),
    createElement(Path, {"d":"M7 18L17 18","key":"5"})
  );
});

ListXSquare.displayName = 'ListXSquare';

module.exports = ListXSquare;
module.exports.ListXSquare = ListXSquare;
module.exports.default = ListXSquare;
