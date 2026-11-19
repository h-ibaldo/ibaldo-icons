'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BluetoothSmall = forwardRef(function BluetoothSmall(
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
    createElement(Path, {"d":"M12 6L12 18","key":"0"}),
    createElement(Path, {"d":"M8 9L12 12L16 9L12 6","key":"1"}),
    createElement(Path, {"d":"M12 18L16 15L12 12L8 15","key":"2"})
  );
});

BluetoothSmall.displayName = 'BluetoothSmall';

module.exports = BluetoothSmall;
module.exports.BluetoothSmall = BluetoothSmall;
module.exports.default = BluetoothSmall;
