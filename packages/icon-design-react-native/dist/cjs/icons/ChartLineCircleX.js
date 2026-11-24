'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const ChartLineCircleX = forwardRef(function ChartLineCircleX(
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
    createElement(Path, {"d":"M21.82440185537962,10.000000000709406c.131225585940228.646240234367724.200866699230573,1.31494140625.200866699230573,2,0,5.52294921875-4.477172851570685,10-10,10-5.522827148450233,0-10-4.47705078125-10-10C2.025268554610193,6.477172852268268,6.50244140615996,2.000000000709406,12.025268554610193,2.000000000709406c.684997558590112,0,1.353698730459655.069580078117724,2,.200927734367724","key":"0"}),
    createElement(Line, {"x1":"18.025268554610193","y1":"6.000000000709406","x2":"22.025268554610193","y2":"2.000000000709406","key":"1"}),
    createElement(Line, {"x1":"22.025268554690228","y1":"6.000000000618456","x2":"18.025268554510149","y2":"2.000000000800355","key":"2"}),
    createElement(Polyline, {"points":"7.025268554610193 15.000000000709406 10.025268554610193 11.000000000709406 14.025268554610193 14.000000000709406 17.025268554610193 10.000000000709406","key":"3"})
  );
});

ChartLineCircleX.displayName = 'ChartLineCircleX';

module.exports = ChartLineCircleX;
module.exports.ChartLineCircleX = ChartLineCircleX;
module.exports.default = ChartLineCircleX;
