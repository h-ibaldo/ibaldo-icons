'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BluetoothRectangleRoundBroken = forwardRef(function BluetoothRectangleRoundBroken(
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
    createElement(Path, {"d":"M15 22L9 22C5.688 22 3 19.313 3 16L3 8C3 4.688 5.688 2 9 2L15 2C18.313 2 21 4.688 21 8L21 16C21 19.313 18.313 22 15 22Z","key":"0"}),
    createElement(Path, {"d":"M12 12L12 19","key":"1"}),
    createElement(Path, {"d":"M14.547 9.773L16 8.5L12 5L12 7.184","key":"2"}),
    createElement(Path, {"d":"M17.586 16.887L6.414 7.113","key":"3"}),
    createElement(Path, {"d":"M12 12L8 15.5","key":"4"}),
    createElement(Path, {"d":"M12 19L16 15.5","key":"5"})
  );
});

BluetoothRectangleRoundBroken.displayName = 'BluetoothRectangleRoundBroken';

module.exports = BluetoothRectangleRoundBroken;
module.exports.BluetoothRectangleRoundBroken = BluetoothRectangleRoundBroken;
module.exports.default = BluetoothRectangleRoundBroken;
