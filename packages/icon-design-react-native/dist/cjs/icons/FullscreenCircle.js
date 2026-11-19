'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Polyline } = RNSvg;

const FullscreenCircle = forwardRef(function FullscreenCircle(
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
    createElement(Circle, {"cx":"12.000000002980414","cy":"11.998779299186936","r":"10","key":"0"}),
    createElement(Polyline, {"points":"8.000000002980414 11.998779299186936 8.000000002980414 7.998779299186936 12.000000002980414 7.998779299186936","key":"1"}),
    createElement(Polyline, {"points":"16.000000002980414 11.998779299186936 16.000000002980414 15.998779299186936 12.000000002980414 15.998779299186936","key":"2"})
  );
});

FullscreenCircle.displayName = 'FullscreenCircle';

module.exports = FullscreenCircle;
module.exports.FullscreenCircle = FullscreenCircle;
module.exports.default = FullscreenCircle;
