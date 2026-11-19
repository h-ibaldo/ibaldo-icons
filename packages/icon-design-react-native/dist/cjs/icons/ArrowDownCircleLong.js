'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowDownCircleLong = forwardRef(function ArrowDownCircleLong(
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
    createElement(Path, {"d":"M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2Z","key":"0"}),
    createElement(Path, {"d":"M15 12L12 15L9 12","key":"1"}),
    createElement(Path, {"d":"M12 2L12 15","key":"2"})
  );
});

ArrowDownCircleLong.displayName = 'ArrowDownCircleLong';

module.exports = ArrowDownCircleLong;
module.exports.ArrowDownCircleLong = ArrowDownCircleLong;
module.exports.default = ArrowDownCircleLong;
