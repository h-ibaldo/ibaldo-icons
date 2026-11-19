'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowDownLeftSlim = forwardRef(function ArrowDownLeftSlim(
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
    createElement(Path, {"d":"M10 18L6 18L6 14","key":"0"}),
    createElement(Path, {"d":"M6 18L18 6","key":"1"})
  );
});

ArrowDownLeftSlim.displayName = 'ArrowDownLeftSlim';

module.exports = ArrowDownLeftSlim;
module.exports.ArrowDownLeftSlim = ArrowDownLeftSlim;
module.exports.default = ArrowDownLeftSlim;
