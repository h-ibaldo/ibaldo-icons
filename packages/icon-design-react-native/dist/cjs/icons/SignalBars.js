'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SignalBars = forwardRef(function SignalBars(
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
    createElement(Path, {"d":"M2 21L2 15","key":"0"}),
    createElement(Path, {"d":"M7 21L7 12","key":"1"}),
    createElement(Path, {"d":"M12 21L12 9","key":"2"}),
    createElement(Path, {"d":"M17 21L17 6","key":"3"}),
    createElement(Path, {"d":"M22 21L22 3","key":"4"})
  );
});

SignalBars.displayName = 'SignalBars';

module.exports = SignalBars;
module.exports.SignalBars = SignalBars;
module.exports.default = SignalBars;
