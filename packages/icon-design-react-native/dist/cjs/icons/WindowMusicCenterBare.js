'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Ellipse, Line, Polyline, Rect } = RNSvg;

const WindowMusicCenterBare = forwardRef(function WindowMusicCenterBare(
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
    createElement(Polyline, {"points":"15.00000000018008 11.000000000448381 12.00000000018008 10.000000000448381 12.00000000018008 17.000000000448381","key":"0"}),
    createElement(Ellipse, {"cx":"10.50000000018008","cy":"17.000000000448381","rx":"1.5","ry":"1","key":"1"}),
    createElement(Rect, {"x":"2.00000000018008","y":"2.00000000044929","width":"20","height":"20","rx":"1.999999999999977","ry":"1.999999999999977","key":"2"}),
    createElement(Line, {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381","key":"3"}),
    createElement(Line, {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381","key":"4"}),
    createElement(Line, {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381","key":"5"})
  );
});

WindowMusicCenterBare.displayName = 'WindowMusicCenterBare';

module.exports = WindowMusicCenterBare;
module.exports.WindowMusicCenterBare = WindowMusicCenterBare;
module.exports.default = WindowMusicCenterBare;
