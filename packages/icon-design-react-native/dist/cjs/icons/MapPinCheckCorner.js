'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const MapPinCheckCorner = forwardRef(function MapPinCheckCorner(
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
    createElement(Path, {"d":"M8 8C8 6.895 8.895 6 10 6C11.105 6 12 6.895 12 8C12 9.105 11.105 10 10 10C8.895 10 8 9.105 8 8Z","key":"0"}),
    createElement(Path, {"d":"M16 19L18 21L21 17","key":"1"}),
    createElement(Path, {"d":"M10 22.004L4.5 11.691C3.035 8.945 3.656 5.551 6 3.504C8.289 1.5 11.711 1.5 14 3.504C16.344 5.551 16.965 8.945 15.5 11.691Z","key":"2"})
  );
});

MapPinCheckCorner.displayName = 'MapPinCheckCorner';

module.exports = MapPinCheckCorner;
module.exports.MapPinCheckCorner = MapPinCheckCorner;
module.exports.default = MapPinCheckCorner;
