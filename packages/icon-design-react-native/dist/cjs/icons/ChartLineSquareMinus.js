'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const ChartLineSquareMinus = forwardRef(function ChartLineSquareMinus(
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
    createElement(Path, {"d":"M21.974731444799545,9.000000004070898v8c0,2.761423749150708-2.238576250849292,5-5,5H6.974731444799545c-2.761423749149799,0-5-2.238576250849292-5-5V7.000000004070898c0-2.761423749150708,2.238576250850201-5,5-5h6","key":"0"}),
    createElement(Line, {"x1":"16.974731444799545","y1":"4.500000004161848","x2":"21.974731444710415","y2":"4.500000004070898","key":"1"}),
    createElement(Polyline, {"points":"6.974731444799545 15.000000003892637 9.974731444799545 11.000000003892637 13.974731444799545 14.000000003892637 16.974731444799545 10.000000003892637","key":"2"})
  );
});

ChartLineSquareMinus.displayName = 'ChartLineSquareMinus';

module.exports = ChartLineSquareMinus;
module.exports.ChartLineSquareMinus = ChartLineSquareMinus;
module.exports.default = ChartLineSquareMinus;
