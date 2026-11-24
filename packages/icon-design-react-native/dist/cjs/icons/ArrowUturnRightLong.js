'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUturnRightLong = forwardRef(function ArrowUturnRightLong(
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
    createElement(Path, {"d":"M17 12L21 8L17 4","key":"0"}),
    createElement(Path, {"d":"M21 8L9 8C5.688 8 3 10.688 3 14C3 17.313 5.688 20 9 20L20 20","key":"1"})
  );
});

ArrowUturnRightLong.displayName = 'ArrowUturnRightLong';

module.exports = ArrowUturnRightLong;
module.exports.ArrowUturnRightLong = ArrowUturnRightLong;
module.exports.default = ArrowUturnRightLong;
