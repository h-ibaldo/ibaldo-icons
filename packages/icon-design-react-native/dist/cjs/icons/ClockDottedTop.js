'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ClockDottedTop = forwardRef(function ClockDottedTop(
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
    createElement(Path, {"d":"M12 7L12 12L17 14","key":"0"}),
    createElement(Path, {"d":"M22 2L22 2","key":"1"}),
    createElement(Path, {"d":"M22 6L22 6","key":"2"}),
    createElement(Path, {"d":"M22 10L22 10","key":"3"}),
    createElement(Path, {"d":"M17 3.359C15.527 2.5 13.824 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C16.477 22 20.262 19.055 21.535 15","key":"4"})
  );
});

ClockDottedTop.displayName = 'ClockDottedTop';

module.exports = ClockDottedTop;
module.exports.ClockDottedTop = ClockDottedTop;
module.exports.default = ClockDottedTop;
