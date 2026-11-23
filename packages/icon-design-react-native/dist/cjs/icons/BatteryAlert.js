'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BatteryAlert = forwardRef(function BatteryAlert(
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
    createElement(Path, {"d":"M17 18L4 18C2.895 18 2 17.105 2 16L2 8C2 6.895 2.895 6 4 6L17 6C18.105 6 19 6.895 19 8L19 16C19 17.105 18.105 18 17 18Z","key":"0"}),
    createElement(Path, {"d":"M19 15L21.316 14.227C21.727 14.094 22 13.711 22 13.277L22 10.723C22 10.289 21.727 9.906 21.316 9.773L19 9","key":"1"}),
    createElement(Path, {"d":"M11 12L11 9","key":"2"}),
    createElement(Path, {"d":"M11 15L11 15","key":"3"})
  );
});

BatteryAlert.displayName = 'BatteryAlert';

module.exports = BatteryAlert;
module.exports.BatteryAlert = BatteryAlert;
module.exports.default = BatteryAlert;
