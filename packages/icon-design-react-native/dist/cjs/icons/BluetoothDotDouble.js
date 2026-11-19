'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BluetoothDotDouble = forwardRef(function BluetoothDotDouble(
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
    createElement(Path, {"d":"M12 2L12 22","key":"0"}),
    createElement(Path, {"d":"M5.5 18L18.5 6","key":"1"}),
    createElement(Path, {"d":"M5.5 6L18.5 18","key":"2"}),
    createElement(Path, {"d":"M12 2L18.5 6","key":"3"}),
    createElement(Path, {"d":"M18.5 18L12 22","key":"4"}),
    createElement(Path, {"d":"M19.5 11.293L18.793 12L19.5 12.707L20.207 12Z","key":"5"}),
    createElement(Path, {"d":"M4.5 11.293L3.793 12L4.5 12.707L5.207 12Z","key":"6"})
  );
});

BluetoothDotDouble.displayName = 'BluetoothDotDouble';

module.exports = BluetoothDotDouble;
module.exports.BluetoothDotDouble = BluetoothDotDouble;
module.exports.default = BluetoothDotDouble;
