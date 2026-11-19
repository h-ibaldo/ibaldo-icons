'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BluetoothDotDoubleNarrow = forwardRef(function BluetoothDotDoubleNarrow(
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
    createElement(Path, {"d":"M12 2L17 7L12 12L7 7","key":"0"}),
    createElement(Path, {"d":"M7 17L12 12L17 17L12 22","key":"1"}),
    createElement(Path, {"d":"M12 2L12 22","key":"2"}),
    createElement(Path, {"d":"M19 12L19 12","key":"3"}),
    createElement(Path, {"d":"M5 12L5 12","key":"4"})
  );
});

BluetoothDotDoubleNarrow.displayName = 'BluetoothDotDoubleNarrow';

module.exports = BluetoothDotDoubleNarrow;
module.exports.BluetoothDotDoubleNarrow = BluetoothDotDoubleNarrow;
module.exports.default = BluetoothDotDoubleNarrow;
