'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FilterLinesShort = forwardRef(function FilterLinesShort(
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
    createElement(Path, {"d":"M2 4L22 4","key":"0"}),
    createElement(Path, {"d":"M6 12L18 12","key":"1"}),
    createElement(Path, {"d":"M10 20L14 20","key":"2"})
  );
});

FilterLinesShort.displayName = 'FilterLinesShort';

module.exports = FilterLinesShort;
module.exports.FilterLinesShort = FilterLinesShort;
module.exports.default = FilterLinesShort;
