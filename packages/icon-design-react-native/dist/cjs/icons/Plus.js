'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line } = RNSvg;

const Plus = forwardRef(function Plus(
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
    createElement(Line, {"x1":"11.974731445219732","y1":"3.000000000448381","x2":"11.974731445219732","y2":"21.0000000004502","key":"0"}),
    createElement(Line, {"x1":"20.974731445219732","y1":"12.0000000004502","x2":"2.974731445219732","y2":"12.0000000004502","key":"1"})
  );
});

Plus.displayName = 'Plus';

module.exports = Plus;
module.exports.Plus = Plus;
module.exports.default = Plus;
