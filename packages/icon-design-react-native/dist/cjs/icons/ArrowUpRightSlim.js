'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUpRightSlim = forwardRef(function ArrowUpRightSlim(
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
    createElement(Path, {"d":"M14 6L18 6L18 10","key":"0"}),
    createElement(Path, {"d":"M18 6L6 18","key":"1"})
  );
});

ArrowUpRightSlim.displayName = 'ArrowUpRightSlim';

module.exports = ArrowUpRightSlim;
module.exports.ArrowUpRightSlim = ArrowUpRightSlim;
module.exports.default = ArrowUpRightSlim;
