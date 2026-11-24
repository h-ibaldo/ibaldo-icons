'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const StopwatchPinKnob = forwardRef(function StopwatchPinKnob(
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
    createElement(Path, {"d":"M10 2L14 2","key":"0"}),
    createElement(Path, {"d":"M20 5L22 7","key":"1"}),
    createElement(Path, {"d":"M21 6L18.563 8.438","key":"2"}),
    createElement(Path, {"d":"M6 16L6 16","key":"3"}),
    createElement(Path, {"d":"M6 12C8.211 12 10 13.789 10 16C10 19 6 22 6 22C6 22 2 19 2 16C2 13.789 3.789 12 6 12","key":"4"}),
    createElement(Path, {"d":"M12 9L12 13","key":"5"}),
    createElement(Path, {"d":"M8.129 19.977C9.277 20.617 10.59 21 12 21C16.418 21 20 17.418 20 13C20 8.582 16.418 5 12 5C7.879 5 4.484 8.121 4.051 12.125L4.195 12.449","key":"6"})
  );
});

StopwatchPinKnob.displayName = 'StopwatchPinKnob';

module.exports = StopwatchPinKnob;
module.exports.StopwatchPinKnob = StopwatchPinKnob;
module.exports.default = StopwatchPinKnob;
