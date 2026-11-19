'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowLeftCircleLong = forwardRef(function ArrowLeftCircleLong(
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
    createElement(Path, {"d":"M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z","key":"0"}),
    createElement(Path, {"d":"M12 9L9 12L12 15","key":"1"}),
    createElement(Path, {"d":"M22 12L9 12","key":"2"})
  );
});

ArrowLeftCircleLong.displayName = 'ArrowLeftCircleLong';

module.exports = ArrowLeftCircleLong;
module.exports.ArrowLeftCircleLong = ArrowLeftCircleLong;
module.exports.default = ArrowLeftCircleLong;
