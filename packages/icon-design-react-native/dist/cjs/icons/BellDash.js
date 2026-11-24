'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const BellDash = forwardRef(function BellDash(
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
    createElement(Line, {"x1":"20.000000004471076","y1":"17.000000003885361","x2":"4.000000004471076","y2":"17.000000003885361","key":"0"}),
    createElement(Path, {"d":"M18.000000004471076,17.000000003885361v-8.000005999998393c0-3.313705185280014-2.686288814731597-5.999994000000697-5.999994000010702-5.999994000000697h-.000012000000424c-3.313705185280924,0-5.999993999988874,2.686288814720683-5.999993999988874,5.999994000000697v8.000005999998393","key":"1"}),
    createElement(Line, {"x1":"10.000000004471076","y1":"21.000000003885361","x2":"14.000000004471076","y2":"21.000000003885361","key":"2"})
  );
});

BellDash.displayName = 'BellDash';

module.exports = BellDash;
module.exports.BellDash = BellDash;
module.exports.default = BellDash;
