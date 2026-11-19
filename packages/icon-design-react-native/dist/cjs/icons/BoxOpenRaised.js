'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polygon, Polyline } = RNSvg;

const BoxOpenRaised = forwardRef(function BoxOpenRaised(
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
    createElement(Polygon, {"points":"14 15.999999999998181 22 12.999999999998181 20 8.999999999998181 12 11.999999999998181 14 15.999999999998181","key":"0"}),
    createElement(Polyline, {"points":"12 5.999999999998181 10 1.999999999998181 2 4.999999999998181 4 8.999999999998181","key":"1"}),
    createElement(Polyline, {"points":"12.000000000045475 6.000000000218279 13.999999999865395 2.000000000127329 22 4.999999999778083 20.00000000018008 8.999999999869033","key":"2"}),
    createElement(Line, {"x1":"20","y1":"8.999999999998181","x2":"12","y2":"5.999999999998181","key":"3"}),
    createElement(Polygon, {"points":"10.000000000134605 15.999999999998181 2 13.000000000358341 3.999999999776264 9.000000000138243 11.99999999991087 11.999999999778083 10.000000000134605 15.999999999998181","key":"4"}),
    createElement(Line, {"x1":"3.999999999776264","y1":"9.000000000138243","x2":"11.999999999641659","y2":"5.999999999778083","key":"5"}),
    createElement(Polyline, {"points":"4 13.749999999998181 4 18.999999999998181 12 21.999999999998181 20 18.999999999998181 20 13.749999999998181","key":"6"})
  );
});

BoxOpenRaised.displayName = 'BoxOpenRaised';

module.exports = BoxOpenRaised;
module.exports.BoxOpenRaised = BoxOpenRaised;
module.exports.default = BoxOpenRaised;
