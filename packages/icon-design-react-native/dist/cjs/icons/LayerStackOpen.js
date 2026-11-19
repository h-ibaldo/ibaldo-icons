'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Polygon, Polyline } = RNSvg;

const LayerStackOpen = forwardRef(function LayerStackOpen(
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
    createElement(Polygon, {"points":"11.999999990796823 10.000000000448381 1.999999990796823 6.000000000448381 11.999999990796823 2.000000000448381 21.999999990796823 6.000000000448381 11.999999990796823 10.000000000448381","key":"0"}),
    createElement(Polyline, {"points":"5.749999990796823 10.500000000448381 1.999999990796823 12.000000000448381 11.999999990796823 16.000000000448381 21.999999990796823 12.000000000448381 18.249999990796823 10.500000000448381","key":"1"}),
    createElement(Polyline, {"points":"5.749999990796823 17.000000000448381 1.999999990796823 18.500000000448381 11.999999990796823 22.500000000448381 21.999999990796823 18.500000000448381 18.249999990796823 17.000000000448381","key":"2"})
  );
});

LayerStackOpen.displayName = 'LayerStackOpen';

module.exports = LayerStackOpen;
module.exports.LayerStackOpen = LayerStackOpen;
module.exports.default = LayerStackOpen;
