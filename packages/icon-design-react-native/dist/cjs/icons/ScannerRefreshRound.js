'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const ScannerRefreshRound = forwardRef(function ScannerRefreshRound(
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
    createElement(Path, {"d":"M1.999999981189831,12.999996564258254h20v6c0,1.655745073481999-1.344254926518001,3-3,3H4.999999981189831c-1.655745073482,0-3-1.344254926518001-3-3v-6h0Z","key":"0"}),
    createElement(Line, {"x1":"5.999999981189831","y1":"16.999996564258254","x2":"6.999999981189831","y2":"16.999996564258254","key":"1"}),
    createElement(Polyline, {"points":"1.999999981189831 1.999996564258254 1.999999981189831 4.999996564254616 4.999999981189831 4.999996564254616","key":"2"}),
    createElement(Path, {"d":"M3.385253887439831,8.999996564258254c.699035644529431.61737060546875,1.607360839840112,1,2.61474609375,1,2.209167480459655,0,4-1.7908935546875,4-4,0-2.20916748046875-1.790832519540345-4-4-4-1.861694335939319,0-3.412475585939319,1.27777099609375-3.858581542970569,3","key":"3"}),
    createElement(Line, {"x1":"21.999999981189831","y1":"12.999996564258254","x2":"12.999999981189831","y2":"7.176449200977004","key":"4"})
  );
});

ScannerRefreshRound.displayName = 'ScannerRefreshRound';

module.exports = ScannerRefreshRound;
module.exports.ScannerRefreshRound = ScannerRefreshRound;
module.exports.default = ScannerRefreshRound;
