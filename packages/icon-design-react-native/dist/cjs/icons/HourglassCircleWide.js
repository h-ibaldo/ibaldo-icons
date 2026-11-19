'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const HourglassCircleWide = forwardRef(function HourglassCircleWide(
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
    createElement(Path, {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement(Path, {"d":"M16 7L8 7L8 7.758C8 8.555 8.316 9.316 8.879 9.879L10.293 11.293C10.684 11.684 10.684 12.316 10.293 12.707L8.879 14.121C8.316 14.684 8 15.445 8 16.242L8 17L16 17L16 16.242C16 15.445 15.684 14.684 15.121 14.121L13.707 12.707C13.316 12.316 13.316 11.684 13.707 11.293L15.121 9.879C15.684 9.316 16 8.555 16 7.758Z","key":"1"})
  );
});

HourglassCircleWide.displayName = 'HourglassCircleWide';

module.exports = HourglassCircleWide;
module.exports.HourglassCircleWide = HourglassCircleWide;
module.exports.default = HourglassCircleWide;
