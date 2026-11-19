'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const StopwatchClockwiseBare = forwardRef(function StopwatchClockwiseBare(
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
    createElement(Path, {"d":"M12 2L12 5","key":"0"}),
    createElement(Path, {"d":"M10 2L14 2","key":"1"}),
    createElement(Path, {"d":"M4 20L4 16L8 16","key":"2"}),
    createElement(Path, {"d":"M5.07 17C6.453 19.391 9.039 21 12 21C16.418 21 20 17.418 20 13C20 8.582 16.418 5 12 5C7.922 5 4.563 8.055 4.07 12","key":"3"}),
    createElement(Path, {"d":"M12 9L12 13","key":"4"})
  );
});

StopwatchClockwiseBare.displayName = 'StopwatchClockwiseBare';

module.exports = StopwatchClockwiseBare;
module.exports.StopwatchClockwiseBare = StopwatchClockwiseBare;
module.exports.default = StopwatchClockwiseBare;
