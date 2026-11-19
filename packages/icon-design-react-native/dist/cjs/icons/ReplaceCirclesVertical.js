'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Path, Polyline } = RNSvg;

const ReplaceCirclesVertical = forwardRef(function ReplaceCirclesVertical(
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
    createElement(Circle, {"cx":"11.949462885142566","cy":"4.000000000480213","r":"2","key":"0"}),
    createElement(Circle, {"cx":"11.949462885142566","cy":"20.000000000480213","r":"2","key":"1"}),
    createElement(Polyline, {"points":"3.949462885142566 6.000000000480213 6.949462885142566 6.000000000480213 6.949462885142566 9.000000000480213","key":"2"}),
    createElement(Path, {"d":"M19.949462885142566,12.000000000480213c0-2.52508544921875-1.1727294921875-4.77337646484375-3-6.23956298828125","key":"3"}),
    createElement(Path, {"d":"M6.682067865614954,6.000000000480213c-1.669006347659888,1.4658203125-2.732604980472388,3.60406494140625-2.732604980472388,6","key":"4"}),
    createElement(Polyline, {"points":"19.94946288488336 17.760437013366754 16.94946288488336 17.760437013097544 16.949462885154389 14.760437013097544","key":"5"}),
    createElement(Path, {"d":"M3.949462885424509,11.760437011929753c-.000000000225555,2.52508544921875,1.1727294917564,4.773376464949251,2.999999999438842,6.23956298855046","key":"6"}),
    createElement(Path, {"d":"M17.21685790441461,17.760437013119372c1.669006347789036-1.465820312347205,2.73260498079253-3.604064941158867,2.732604981009899-5.999999999752617","key":"7"})
  );
});

ReplaceCirclesVertical.displayName = 'ReplaceCirclesVertical';

module.exports = ReplaceCirclesVertical;
module.exports.ReplaceCirclesVertical = ReplaceCirclesVertical;
module.exports.default = ReplaceCirclesVertical;
