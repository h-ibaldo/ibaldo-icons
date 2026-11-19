'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Polyline } = RNSvg;

const ChartLineUpAxisJagged = forwardRef(function ChartLineUpAxisJagged(
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
    createElement(Polyline, {"points":"2 2.000000000480213 2 22.000000000480213 22 22.000000000480213","key":"0"}),
    createElement(Polyline, {"points":"6 18.000000000480213 9 12.000000000480213 11 15.000000000480213 14 9.000000000480213 18 13.000000000480213 22 4.000000000480213","key":"1"})
  );
});

ChartLineUpAxisJagged.displayName = 'ChartLineUpAxisJagged';

module.exports = ChartLineUpAxisJagged;
module.exports.ChartLineUpAxisJagged = ChartLineUpAxisJagged;
module.exports.default = ChartLineUpAxisJagged;
