'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUturnDownFlippedLong = forwardRef(function ArrowUturnDownFlippedLong(
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
    createElement(Path, {"d":"M12 17L8 21L4 17","key":"0"}),
    createElement(Path, {"d":"M8 21L8 9C8 5.688 10.688 3 14 3C17.313 3 20 5.688 20 9L20 20","key":"1"})
  );
});

ArrowUturnDownFlippedLong.displayName = 'ArrowUturnDownFlippedLong';

module.exports = ArrowUturnDownFlippedLong;
module.exports.ArrowUturnDownFlippedLong = ArrowUturnDownFlippedLong;
module.exports.default = ArrowUturnDownFlippedLong;
