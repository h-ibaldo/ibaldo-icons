'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SkipForwardDoubleCircle = forwardRef(function SkipForwardDoubleCircle(
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
    createElement(Path, {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z","key":"0"}),
    createElement(Path, {"d":"M7 8.414L7 15.586C7 15.75 7.195 15.844 7.324 15.738L12 12L7.324 8.262C7.195 8.156 7 8.25 7 8.414Z","key":"1"}),
    createElement(Path, {"d":"M12 8.414L12 15.586C12 15.75 12.195 15.844 12.324 15.738L17 12L12.324 8.262C12.195 8.156 12 8.25 12 8.414Z","key":"2"}),
    createElement(Path, {"d":"M17 8L17 16","key":"3"})
  );
});

SkipForwardDoubleCircle.displayName = 'SkipForwardDoubleCircle';

module.exports = SkipForwardDoubleCircle;
module.exports.SkipForwardDoubleCircle = SkipForwardDoubleCircle;
module.exports.default = SkipForwardDoubleCircle;
