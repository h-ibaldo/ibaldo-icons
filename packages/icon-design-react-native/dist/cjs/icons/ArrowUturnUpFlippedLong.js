'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUturnUpFlippedLong = forwardRef(function ArrowUturnUpFlippedLong(
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
    createElement(Path, {"d":"M12 7L8 3L4 7","key":"0"}),
    createElement(Path, {"d":"M8 3L8 15C8 18.313 10.688 21 14 21C17.313 21 20 18.313 20 15L20 4","key":"1"})
  );
});

ArrowUturnUpFlippedLong.displayName = 'ArrowUturnUpFlippedLong';

module.exports = ArrowUturnUpFlippedLong;
module.exports.ArrowUturnUpFlippedLong = ArrowUturnUpFlippedLong;
module.exports.default = ArrowUturnUpFlippedLong;
