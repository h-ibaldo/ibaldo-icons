'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BatteryLowBoxy = forwardRef(function BatteryLowBoxy(
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
    createElement(Path, {"d":"M17 19L5 19C3.895 19 3 18.105 3 17L3 7C3 5.895 3.895 5 5 5L17 5C18.105 5 19 5.895 19 7L19 17C19 18.105 18.105 19 17 19Z","key":"0"}),
    createElement(Path, {"d":"M19 9L21 9C21.551 9 22 9.336 22 9.75L22 14.25C22 14.664 21.551 15 21 15L19 15","key":"1"}),
    createElement(Path, {"d":"M7 9L7 15","key":"2"})
  );
});

BatteryLowBoxy.displayName = 'BatteryLowBoxy';

module.exports = BatteryLowBoxy;
module.exports.BatteryLowBoxy = BatteryLowBoxy;
module.exports.default = BatteryLowBoxy;
