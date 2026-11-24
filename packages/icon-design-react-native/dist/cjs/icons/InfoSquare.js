'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const InfoSquare = forwardRef(function InfoSquare(
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
    createElement(Line, {"x1":"11.949462878465056","y1":"7.987562035596966","x2":"11.949462878465056","y2":"7.997562035597184","key":"0"}),
    createElement(Line, {"x1":"11.949462878465056","y1":"15.997562035597184","x2":"11.949462878465056","y2":"11.997562035597184","key":"1"}),
    createElement(Rect, {"x":"1.94946287847597","y":"1.997562036048294","width":"20","height":"20","rx":"3","ry":"3","key":"2"})
  );
});

InfoSquare.displayName = 'InfoSquare';

module.exports = InfoSquare;
module.exports.InfoSquare = InfoSquare;
module.exports.default = InfoSquare;
