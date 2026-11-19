'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline } = RNSvg;

const MoveUpDownChevronSmall = forwardRef(function MoveUpDownChevronSmall(
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
    createElement(Line, {"x1":"19.000000004469257","y1":"12.000000003885361","x2":"5.000000004469257","y2":"12.000000003885361","key":"0"}),
    createElement(Line, {"x1":"19.000000004469257","y1":"8.000000003885361","x2":"5.000000004469257","y2":"8.000000003885361","key":"1"}),
    createElement(Polyline, {"points":"10.000000004469257 4.000000003883542 12.000000004469257 2.000000003886271 14.000000004469257 4.000000003883542","key":"2"}),
    createElement(Line, {"x1":"5.000000004469257","y1":"16.000000003885361","x2":"19.000000004469257","y2":"16.000000003885361","key":"3"}),
    createElement(Polyline, {"points":"13.999998272249286 20.000000696674761 12.000000350550181 21.999998618364771 10.000002428869266 20.000000696674761","key":"4"})
  );
});

MoveUpDownChevronSmall.displayName = 'MoveUpDownChevronSmall';

module.exports = MoveUpDownChevronSmall;
module.exports.MoveUpDownChevronSmall = MoveUpDownChevronSmall;
module.exports.default = MoveUpDownChevronSmall;
