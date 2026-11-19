'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Polyline } = RNSvg;

const Accessibility = forwardRef(function Accessibility(
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
    createElement(Circle, {"cx":"11.999999994010068","cy":"3.997565472760471","r":"2","key":"0"}),
    createElement(Polyline, {"points":"3.999999994010068 6.997565472760471 8.999999994010068 8.997565472712267 14.999999994010068 8.997565472712267 19.999999994010068 6.997565472760471","key":"1"}),
    createElement(Polyline, {"points":"8.999999994010068 8.997565472712267 8.999999994010068 14.997565472712267 6.999999994010068 21.997565472760471","key":"2"}),
    createElement(Polyline, {"points":"14.999999993649908 8.997565472760471 14.999999993829988 14.997565472760471 16.999999994010068 21.997565472712267","key":"3"}),
    createElement(Line, {"x1":"8.999999994010068","y1":"14.997565472712267","x2":"14.999999994010068","y2":"14.997565472712267","key":"4"})
  );
});

Accessibility.displayName = 'Accessibility';

module.exports = Accessibility;
module.exports.Accessibility = Accessibility;
module.exports.default = Accessibility;
