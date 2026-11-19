'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline, Rect } = RNSvg;

const PaneArrowRightList = forwardRef(function PaneArrowRightList(
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
    createElement(Line, {"x1":"7.9747314392107","y1":"16.000000004040885","x2":"1.9747314392107","y2":"16.000000003501555","key":"0"}),
    createElement(Line, {"x1":"7.97473143956995","y1":"12.000000004040885","x2":"1.97473143956995","y2":"12.000000003501555","key":"1"}),
    createElement(Line, {"x1":"7.974731439929201","y1":"8.000000004040885","x2":"1.974731439929201","y2":"8.000000003501555","key":"2"}),
    createElement(Rect, {"x":"1.974731439570405","y":"4.000000004400135","width":"20","height":"16","rx":"1.999999999999245","ry":"1.999999999999245","transform":"translate(23.949462878063059 24.000000009875752) rotate(-180)","key":"3"}),
    createElement(Line, {"x1":"7.97473143885145","y1":"20.000000004040885","x2":"7.974731440288451","y2":"4.000000004040885","key":"4"}),
    createElement(Line, {"x1":"11.97473143957086","y1":"12.000000005073161","x2":"17.97473143957086","y2":"12.00000000426553","key":"5"}),
    createElement(Polyline, {"points":"14.974731439974676 15.000000004669346 17.97473143957086 12.00000000426553 14.974731439167044 9.000000004669346","key":"6"})
  );
});

PaneArrowRightList.displayName = 'PaneArrowRightList';

module.exports = PaneArrowRightList;
module.exports.PaneArrowRightList = PaneArrowRightList;
module.exports.default = PaneArrowRightList;
