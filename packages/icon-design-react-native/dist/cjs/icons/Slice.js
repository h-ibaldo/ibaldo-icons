'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Slice = forwardRef(function Slice(
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
    createElement(Path, {"d":"M22 3L10 15L5 10L13 2","key":"0"}),
    createElement(Path, {"d":"M9.5 14.5L2 22L2 14L5.5 10.5","key":"1"}),
    createElement(Path, {"d":"M10 10L18 2","key":"2"})
  );
});

Slice.displayName = 'Slice';

module.exports = Slice;
module.exports.Slice = Slice;
module.exports.default = Slice;
