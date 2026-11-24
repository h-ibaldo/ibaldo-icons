'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline } = RNSvg;

const MoveUpDown = forwardRef(function MoveUpDown(
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
    createElement(Polyline, {"points":"10.000000004469257 4.000000003886271 12.000000004469257 2.000000003886271 14.000000004469257 4.000000003886271","key":"2"}),
    createElement(Line, {"x1":"12.000000004469257","y1":"8.000000003885361","x2":"12.000000004469257","y2":"2.000000003886271","key":"3"}),
    createElement(Line, {"x1":"3.000000004469257","y1":"16.000000003885361","x2":"21.000000004469257","y2":"16.000000003885361","key":"4"}),
    createElement(Polyline, {"points":"14.000000004469257 20.000000003885361 12.000000004469257 22.000000003885361 10.000000004469257 20.000000003885361","key":"5"}),
    createElement(Line, {"x1":"12.000000004469257","y1":"16.000000003885361","x2":"12.000000004469257","y2":"22.000000003885361","key":"6"})
  );
});

MoveUpDown.displayName = 'MoveUpDown';

module.exports = MoveUpDown;
module.exports.MoveUpDown = MoveUpDown;
module.exports.default = MoveUpDown;
