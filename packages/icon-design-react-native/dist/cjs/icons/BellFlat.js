'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const BellFlat = forwardRef(function BellFlat(
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
    createElement(Path, {"d":"M14.000000004471076,17.000000003885361v2.000002000001587c0,1.1045683950897-.895429604921446,1.999997999998413-1.999998000010237,1.999997999998413h-.000004000001354c-1.10456839509061,0-1.999997999988409-.895429604908713-1.999997999988409-1.999997999998413v-2.000002000001587","key":"0"}),
    createElement(Line, {"x1":"20.000000004471076","y1":"17.000000003885361","x2":"4.000000004471076","y2":"17.000000003885361","key":"1"}),
    createElement(Path, {"d":"M18.000000004471076,17.000000003885361v-7.000005999998393c0-3.313705185279105-2.686288814731597-5.999994000000697-5.999994000010702-5.999994000000697h-.000012000000424c-3.313705185280924,0-5.999993999988874,2.686288814721593-5.999993999988874,5.999994000000697v7.000005999998393","key":"2"}),
    createElement(Line, {"x1":"12.000000004471076","y1":"2.000000003886271","x2":"12.000000004471076","y2":"4.000000003886271","key":"3"})
  );
});

BellFlat.displayName = 'BellFlat';

module.exports = BellFlat;
module.exports.BellFlat = BellFlat;
module.exports.default = BellFlat;
