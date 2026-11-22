'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ListChevronLeft = forwardRef(function ListChevronLeft(
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
    createElement(Path, {"d":"M11 4L21 4","key":"0"}),
    createElement(Path, {"d":"M11 12L21 12","key":"1"}),
    createElement(Path, {"d":"M11 20L21 20","key":"2"}),
    createElement(Path, {"d":"M7.242 16.484L3 12.242L7.242 8","key":"3"})
  );
});

ListChevronLeft.displayName = 'ListChevronLeft';

module.exports = ListChevronLeft;
module.exports.ListChevronLeft = ListChevronLeft;
module.exports.default = ListChevronLeft;
