'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ClockTicksSquared = forwardRef(function ClockTicksSquared(
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
    createElement(Path, {"d":"M12 9L12 12L15 12","key":"0"}),
    createElement(Path, {"d":"M12 5L12 5","key":"1"}),
    createElement(Path, {"d":"M12 19L12 19","key":"2"}),
    createElement(Path, {"d":"M19 12L19 12","key":"3"}),
    createElement(Path, {"d":"M5 12L5 12","key":"4"}),
    createElement(Path, {"d":"M16.949 7.051L16.949 7.051","key":"5"}),
    createElement(Path, {"d":"M7.051 16.949L7.051 16.949","key":"6"}),
    createElement(Path, {"d":"M16.949 16.949L16.949 16.949","key":"7"}),
    createElement(Path, {"d":"M7.051 7.051L7.051 7.051","key":"8"}),
    createElement(Path, {"d":"M18 22L6 22C3.789 22 2 20.211 2 18L2 6C2 3.789 3.789 2 6 2L18 2C20.211 2 22 3.789 22 6L22 18C22 20.211 20.211 22 18 22Z","key":"9"})
  );
});

ClockTicksSquared.displayName = 'ClockTicksSquared';

module.exports = ClockTicksSquared;
module.exports.ClockTicksSquared = ClockTicksSquared;
module.exports.default = ClockTicksSquared;
