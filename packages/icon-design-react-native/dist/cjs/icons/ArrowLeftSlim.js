'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowLeftSlim = forwardRef(function ArrowLeftSlim(
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
    createElement(Path, {"d":"M7 9L4 12L7 15","key":"0"}),
    createElement(Path, {"d":"M20 12L4 12","key":"1"})
  );
});

ArrowLeftSlim.displayName = 'ArrowLeftSlim';

module.exports = ArrowLeftSlim;
module.exports.ArrowLeftSlim = ArrowLeftSlim;
module.exports.default = ArrowLeftSlim;
