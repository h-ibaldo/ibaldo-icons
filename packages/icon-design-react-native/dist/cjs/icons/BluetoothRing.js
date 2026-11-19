'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BluetoothRing = forwardRef(function BluetoothRing(
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
    createElement(Path, {"d":"M8.5 2L8.5 22","key":"0"}),
    createElement(Path, {"d":"M2 18L15 6","key":"1"}),
    createElement(Path, {"d":"M2 6L15 18","key":"2"}),
    createElement(Path, {"d":"M8.5 2L15 6","key":"3"}),
    createElement(Path, {"d":"M15 18L8.5 22","key":"4"}),
    createElement(Path, {"d":"M17.219 14.316C17.711 13.492 18 12.531 18 11.5C18 10.734 17.844 10.004 17.559 9.34","key":"5"}),
    createElement(Path, {"d":"M20.094 17.191C21.285 15.605 22 13.641 22 11.5C22 9.617 21.445 7.871 20.504 6.395","key":"6"})
  );
});

BluetoothRing.displayName = 'BluetoothRing';

module.exports = BluetoothRing;
module.exports.BluetoothRing = BluetoothRing;
module.exports.default = BluetoothRing;
