'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ListSquareCursorTop = forwardRef(function ListSquareCursorTop(
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
    createElement(Path, {"d":"M10 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 16","key":"0"}),
    createElement(Path, {"d":"M17 18L7 18","key":"1"}),
    createElement(Path, {"d":"M17 14L13 14","key":"2"}),
    createElement(Path, {"d":"M17 10L14 10","key":"3"}),
    createElement(Path, {"d":"M17 6L14 6","key":"4"}),
    createElement(Path, {"d":"M10.258 7.883L7.895 8.703L9.859 12.305L6.77 13.988L4.809 10.387L2.836 11.93C2.496 12.195 2 11.953 2 11.523L2 2.52C2 2.109 2.453 1.859 2.797 2.082L10.367 6.957C10.73 7.191 10.664 7.738 10.258 7.883Z","key":"5"})
  );
});

ListSquareCursorTop.displayName = 'ListSquareCursorTop';

module.exports = ListSquareCursorTop;
module.exports.ListSquareCursorTop = ListSquareCursorTop;
module.exports.default = ListSquareCursorTop;
