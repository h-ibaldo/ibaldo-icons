'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Ellipse, Polyline } = RNSvg;

const Music = forwardRef(function Music(
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
    createElement(Ellipse, {"cx":"5.5","cy":"18.999999999998181","rx":"3.5","ry":"3","key":"0"}),
    createElement(Ellipse, {"cx":"18.5","cy":"16.999999999998181","rx":"3.5","ry":"3","key":"1"}),
    createElement(Polyline, {"points":"9 18.999999999998181 9 3.999999999998181 22 1.999999999998181 22 16.999999999998181","key":"2"})
  );
});

Music.displayName = 'Music';

module.exports = Music;
module.exports.Music = Music;
module.exports.default = Music;
