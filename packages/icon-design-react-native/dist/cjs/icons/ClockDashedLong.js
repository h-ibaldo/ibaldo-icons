'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ClockDashedLong = forwardRef(function ClockDashedLong(
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
    createElement(Path, {"d":"M2.52 8.73C2.188 9.727 2 10.789 2 11.895C2 13.004 2.188 14.063 2.52 15.059","key":"0"}),
    createElement(Path, {"d":"M19.477 5.27C18.066 3.68 16.164 2.535 14 2.098","key":"1"}),
    createElement(Path, {"d":"M21.48 15.059C21.813 14.066 22 13.004 22 11.895C22 10.789 21.813 9.727 21.48 8.73","key":"2"}),
    createElement(Path, {"d":"M10 2.098C7.836 2.535 5.934 3.68 4.523 5.27","key":"3"}),
    createElement(Path, {"d":"M14 21.695C16.164 21.258 18.066 20.109 19.477 18.52","key":"4"}),
    createElement(Path, {"d":"M4.523 18.523C5.934 20.113 7.836 21.254 10 21.695","key":"5"}),
    createElement(Path, {"d":"M12 7L12 12L17 14","key":"6"})
  );
});

ClockDashedLong.displayName = 'ClockDashedLong';

module.exports = ClockDashedLong;
module.exports.ClockDashedLong = ClockDashedLong;
module.exports.default = ClockDashedLong;
