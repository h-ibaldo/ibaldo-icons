'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Polyline } = RNSvg;

const ClockAngled = forwardRef(function ClockAngled(
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
    createElement(Circle, {"cx":"12","cy":"11.999999999998181","r":"10","key":"0"}),
    createElement(Polyline, {"points":"12.000000006790287 6.999999999998181 12.000000006790287 11.999999999998181 17.000000006790287 13.999999999998181","key":"1"})
  );
});

ClockAngled.displayName = 'ClockAngled';

module.exports = ClockAngled;
module.exports.ClockAngled = ClockAngled;
module.exports.default = ClockAngled;
