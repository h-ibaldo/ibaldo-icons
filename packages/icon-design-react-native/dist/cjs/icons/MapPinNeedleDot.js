'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const MapPinNeedleDot = forwardRef(function MapPinNeedleDot(
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
    createElement(Path, {"d":"M12 22L12 12","key":"0"}),
    createElement(Path, {"d":"M7 7C7 4.238 9.238 2 12 2C14.762 2 17 4.238 17 7C17 9.762 14.762 12 12 12C9.238 12 7 9.762 7 7Z","key":"1"}),
    createElement(Path, {"d":"M11 7C11 6.449 11.449 6 12 6C12.551 6 13 6.449 13 7C13 7.551 12.551 8 12 8C11.449 8 11 7.551 11 7Z","key":"2"})
  );
});

MapPinNeedleDot.displayName = 'MapPinNeedleDot';

module.exports = MapPinNeedleDot;
module.exports.MapPinNeedleDot = MapPinNeedleDot;
module.exports.default = MapPinNeedleDot;
