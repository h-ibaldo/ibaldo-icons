'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const ChartLineCircleDotted = forwardRef(function ChartLineCircleDotted(
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
    createElement(Path, {"d":"M4.878417963270294,19.071044922358851c1.809631347649884,1.809631347648974,4.309631347649884,2.928955078121362,7.071044921869543,2.928955078121362,5.522827148440228,0,10-4.4771728515625,10-10,0-5.522888183590112-4.477172851559772-10-10-10","key":"0"}),
    createElement(Line, {"x1":"1.959462885140056","y1":"12.000000000480213","x2":"1.949462885139837","y2":"12.000000000480213","strokeDasharray":".5 3.5","key":"1"}),
    createElement(Line, {"x1":"4.888395073119682","y1":"4.928932188769977","x2":"4.878395073119464","y2":"4.928932188769977","strokeDasharray":".5 3.5","key":"2"}),
    createElement(Line, {"x1":"2.704057844930503","y1":"15.786486173899902","x2":"2.694057844930285","y2":"15.786486173899902","strokeDasharray":".5 3.5","key":"3"}),
    createElement(Line, {"x1":"2.704057844930503","y1":"8.21351382704961","x2":"2.694057844930285","y2":"8.21351382704961","strokeDasharray":".5 3.5","key":"4"}),
    createElement(Line, {"x1":"8.092353268470106","y1":"2.777990283899271","x2":"8.082353268469888","y2":"2.777990283899271","strokeDasharray":".5 3.5","key":"5"}),
    createElement(Polyline, {"points":"6.949462885139837 15.000000000480213 9.949462885139837 11.000000000480213 13.949462885139837 14.000000000480213 16.949462885139837 10.000000000480213","key":"6"})
  );
});

ChartLineCircleDotted.displayName = 'ChartLineCircleDotted';

module.exports = ChartLineCircleDotted;
module.exports.ChartLineCircleDotted = ChartLineCircleDotted;
module.exports.default = ChartLineCircleDotted;
