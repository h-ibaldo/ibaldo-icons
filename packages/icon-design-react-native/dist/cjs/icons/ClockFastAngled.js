'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ClockFastAngled = forwardRef(function ClockFastAngled(
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
    createElement(Path, {"d":"M2 14L8 14","key":"0"}),
    createElement(Path, {"d":"M6 22L8 22","key":"1"}),
    createElement(Path, {"d":"M4 18L8 18","key":"2"}),
    createElement(Path, {"d":"M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C7.16 2 3.129 5.438 2.199 10","key":"3"}),
    createElement(Path, {"d":"M12 7L12 12L17 14","key":"4"})
  );
});

ClockFastAngled.displayName = 'ClockFastAngled';

module.exports = ClockFastAngled;
module.exports.ClockFastAngled = ClockFastAngled;
module.exports.default = ClockFastAngled;
