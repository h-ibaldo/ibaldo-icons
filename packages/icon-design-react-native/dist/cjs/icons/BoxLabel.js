'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polygon, Polyline } = RNSvg;

const BoxLabel = forwardRef(function BoxLabel(
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
    createElement(Polygon, {"points":"12 1.999999999998181 2 6.999999999998181 2 16.999999999998181 12 21.999999999998181 22 16.999999999998181 22 6.999999999998181 12 1.999999999998181","key":"0"}),
    createElement(Line, {"x1":"7","y1":"4.499999999998181","x2":"17","y2":"9.499999999998181","key":"1"}),
    createElement(Polyline, {"points":"2 6.999999999998181 12 11.999999999998181 22 6.999999999998181","key":"2"}),
    createElement(Line, {"x1":"12","y1":"21.999999999998181","x2":"12","y2":"11.999999999998181","key":"3"}),
    createElement(Line, {"x1":"16","y1":"13.999999999998181","x2":"18","y2":"12.999999999998181","key":"4"})
  );
});

BoxLabel.displayName = 'BoxLabel';

module.exports = BoxLabel;
module.exports.BoxLabel = BoxLabel;
module.exports.default = BoxLabel;
