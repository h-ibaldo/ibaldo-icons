'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUpLeftSlim = forwardRef(function ArrowUpLeftSlim(
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
    createElement(Path, {"d":"M6 10L6 6L10 6","key":"0"}),
    createElement(Path, {"d":"M6 6L18 18","key":"1"})
  );
});

ArrowUpLeftSlim.displayName = 'ArrowUpLeftSlim';

module.exports = ArrowUpLeftSlim;
module.exports.ArrowUpLeftSlim = ArrowUpLeftSlim;
module.exports.default = ArrowUpLeftSlim;
