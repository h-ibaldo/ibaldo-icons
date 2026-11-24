'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SortUpNarrowWide = forwardRef(function SortUpNarrowWide(
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
    createElement(Path, {"d":"M7 22L7 2","key":"0"}),
    createElement(Path, {"d":"M22 22L11 22","key":"1"}),
    createElement(Path, {"d":"M19 17L11 17","key":"2"}),
    createElement(Path, {"d":"M16 12L11 12","key":"3"}),
    createElement(Path, {"d":"M12 7L7 2L2 7","key":"4"})
  );
});

SortUpNarrowWide.displayName = 'SortUpNarrowWide';

module.exports = SortUpNarrowWide;
module.exports.SortUpNarrowWide = SortUpNarrowWide;
module.exports.default = SortUpNarrowWide;
