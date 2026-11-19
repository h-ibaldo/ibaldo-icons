'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BluetoothOffNarrow = forwardRef(function BluetoothOffNarrow(
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
    createElement(Path, {"d":"M17 17L12 22","key":"0"}),
    createElement(Path, {"d":"M7 17L12 12","key":"1"}),
    createElement(Path, {"d":"M14.863 9.137L17 7L12 2L12 6.16","key":"2"}),
    createElement(Path, {"d":"M12 22L12 12","key":"3"}),
    createElement(Path, {"d":"M4 4L20 20","key":"4"})
  );
});

BluetoothOffNarrow.displayName = 'BluetoothOffNarrow';

module.exports = BluetoothOffNarrow;
module.exports.BluetoothOffNarrow = BluetoothOffNarrow;
module.exports.default = BluetoothOffNarrow;
