'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FilterLinesSplit = forwardRef(function FilterLinesSplit(
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
    createElement(Path, {"d":"M2 4L12 4","key":"0"}),
    createElement(Path, {"d":"M16 4L22 4","key":"1"}),
    createElement(Path, {"d":"M6 12L18 12","key":"2"}),
    createElement(Path, {"d":"M10 20L14 20","key":"3"})
  );
});

FilterLinesSplit.displayName = 'FilterLinesSplit';

module.exports = FilterLinesSplit;
module.exports.FilterLinesSplit = FilterLinesSplit;
module.exports.default = FilterLinesSplit;
