'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BluetoothDotsNarrow = forwardRef(function BluetoothDotsNarrow(
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
    createElement(Path, {"d":"M8 2L13 7L8 12L3 7","key":"0"}),
    createElement(Path, {"d":"M3 17L8 12L13 17L8 22","key":"1"}),
    createElement(Path, {"d":"M8 2L8 22","key":"2"}),
    createElement(Path, {"d":"M18 12L18 12","key":"3"}),
    createElement(Path, {"d":"M14 12L14 12","key":"4"}),
    createElement(Path, {"d":"M22 12L22 12","key":"5"})
  );
});

BluetoothDotsNarrow.displayName = 'BluetoothDotsNarrow';

module.exports = BluetoothDotsNarrow;
module.exports.BluetoothDotsNarrow = BluetoothDotsNarrow;
module.exports.default = BluetoothDotsNarrow;
