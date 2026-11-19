'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline } = RNSvg;

const MoveUpDownChevron = forwardRef(function MoveUpDownChevron(
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
    createElement(Line, {"x1":"21.000000004469257","y1":"12.000000003885361","x2":"3.000000004469257","y2":"12.000000003885361","key":"0"}),
    createElement(Line, {"x1":"21.000000004469257","y1":"8.000000003885361","x2":"3.000000004469257","y2":"8.000000003885361","key":"1"}),
    createElement(Polyline, {"points":"9.000000004469257 4.000000003886271 12.000000004469257 2.000000003886271 15.000000004469257 4.000000003886271","key":"2"}),
    createElement(Line, {"x1":"3.000000004469257","y1":"16.000000003885361","x2":"21.000000004469257","y2":"16.000000003885361","key":"3"}),
    createElement(Polyline, {"points":"15.000000004469257 20.000000003885361 12.000000004469257 22.000000003885361 9.000000004469257 20.000000003885361","key":"4"})
  );
});

MoveUpDownChevron.displayName = 'MoveUpDownChevron';

module.exports = MoveUpDownChevron;
module.exports.MoveUpDownChevron = MoveUpDownChevron;
module.exports.default = MoveUpDownChevron;
