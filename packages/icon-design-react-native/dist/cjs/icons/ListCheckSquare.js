'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ListCheckSquare = forwardRef(function ListCheckSquare(
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
    createElement(Path, {"d":"M20 9L16 9","key":"0"}),
    createElement(Path, {"d":"M20 13L16 13","key":"1"}),
    createElement(Path, {"d":"M20 17L9 17","key":"2"}),
    createElement(Path, {"d":"M20 21L9 21","key":"3"}),
    createElement(Path, {"d":"M5 17L4 17","key":"4"}),
    createElement(Path, {"d":"M5 21L4 21","key":"5"}),
    createElement(Path, {"d":"M5.5 8L6.5 9L8.5 7","key":"6"}),
    createElement(Path, {"d":"M10 13L4 13C2.895 13 2 12.105 2 11L2 5C2 3.895 2.895 3 4 3L10 3C11.105 3 12 3.895 12 5L12 11C12 12.105 11.105 13 10 13Z","key":"7"})
  );
});

ListCheckSquare.displayName = 'ListCheckSquare';

module.exports = ListCheckSquare;
module.exports.ListCheckSquare = ListCheckSquare;
module.exports.default = ListCheckSquare;
