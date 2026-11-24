'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const VolumeBluetooth = forwardRef(function VolumeBluetooth(
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
    createElement(Path, {"d":"M19 10L19 22","key":"0"}),
    createElement(Path, {"d":"M16 13L19 16L22 13L19 10","key":"1"}),
    createElement(Path, {"d":"M19 22L22 19L19 16L16 19","key":"2"}),
    createElement(Path, {"d":"M12 16L12 3C12 2.203 11.109 1.727 10.445 2.168L6 6L3 6C2.449 6 2 6.449 2 7L2 11.867C2 12.418 2.449 12.867 3 12.867L6 12.867L10.445 16.832C11.109 17.273 12 16.797 12 16Z","key":"3"})
  );
});

VolumeBluetooth.displayName = 'VolumeBluetooth';

module.exports = VolumeBluetooth;
module.exports.VolumeBluetooth = VolumeBluetooth;
module.exports.default = VolumeBluetooth;
