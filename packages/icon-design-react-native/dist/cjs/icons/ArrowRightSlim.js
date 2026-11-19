'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowRightSlim = forwardRef(function ArrowRightSlim(
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
    createElement(Path, {"d":"M17 9L20 12L17 15","key":"0"}),
    createElement(Path, {"d":"M4 12L20 12","key":"1"})
  );
});

ArrowRightSlim.displayName = 'ArrowRightSlim';

module.exports = ArrowRightSlim;
module.exports.ArrowRightSlim = ArrowRightSlim;
module.exports.default = ArrowRightSlim;
