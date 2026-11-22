'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const MapPinMinusCorner = forwardRef(function MapPinMinusCorner(
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
    createElement(Path, {"d":"M7 8C7 6.895 7.895 6 9 6C10.105 6 11 6.895 11 8C11 9.105 10.105 10 9 10C7.895 10 7 9.105 7 8Z","key":"0"}),
    createElement(Path, {"d":"M9 22.004L3.5 11.691C2.035 8.945 2.656 5.551 5 3.504C7.289 1.5 10.711 1.5 13 3.504C15.344 5.551 15.965 8.945 14.5 11.691Z","key":"1"}),
    createElement(Path, {"d":"M21 18L15 18","key":"2"})
  );
});

MapPinMinusCorner.displayName = 'MapPinMinusCorner';

module.exports = MapPinMinusCorner;
module.exports.MapPinMinusCorner = MapPinMinusCorner;
module.exports.default = MapPinMinusCorner;
