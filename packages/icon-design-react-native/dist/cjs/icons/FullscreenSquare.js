'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Polyline, Rect } = RNSvg;

const FullscreenSquare = forwardRef(function FullscreenSquare(
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
    createElement(Rect, {"x":"1.99999999829015","y":"2.998782736161957","width":"20","height":"18","rx":".999999999997733","ry":".999999999997733","transform":"translate(23.999999996041961 23.997565472862306) rotate(-180)","key":"0"}),
    createElement(Polyline, {"points":"5.999999998300154 8.998782736161957 5.999999998300154 6.998782736161957 7.999999998300154 6.998782736161957","key":"1"}),
    createElement(Polyline, {"points":"15.999999998210114 6.998782736252906 17.999999998210114 6.998782736161957 17.999999998300154 8.998782736161957","key":"2"}),
    createElement(Polyline, {"points":"17.999999998300154 14.998782736161957 17.999999998300154 16.998782736161957 15.999999998300154 16.998782736161957","key":"3"}),
    createElement(Polyline, {"points":"7.999999998390194 16.998782736071007 5.999999998390194 16.998782736161957 5.999999998300154 14.998782736161957","key":"4"})
  );
});

FullscreenSquare.displayName = 'FullscreenSquare';

module.exports = FullscreenSquare;
module.exports.FullscreenSquare = FullscreenSquare;
module.exports.default = FullscreenSquare;
