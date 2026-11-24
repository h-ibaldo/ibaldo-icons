'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BluetoothPill = forwardRef(function BluetoothPill(
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
    createElement(Path, {"d":"M12 22C7.582 22 4 18.418 4 14L4 10C4 5.582 7.582 2 12 2C16.418 2 20 5.582 20 10L20 14C20 18.418 16.418 22 12 22Z","key":"0"}),
    createElement(Path, {"d":"M12 6L12 18","key":"1"}),
    createElement(Path, {"d":"M8 9L12 12L16 9L12 6","key":"2"}),
    createElement(Path, {"d":"M12 18L16 15L12 12L8 15","key":"3"})
  );
});

BluetoothPill.displayName = 'BluetoothPill';

module.exports = BluetoothPill;
module.exports.BluetoothPill = BluetoothPill;
module.exports.default = BluetoothPill;
