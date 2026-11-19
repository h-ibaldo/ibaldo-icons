'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const InfoSquareSmall = forwardRef(function InfoSquareSmall(
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
    createElement(Rect, {"x":"3.949462878465056","y":"3.997562035597184","width":"16","height":"16","rx":"3","ry":"3","key":"0"}),
    createElement(Line, {"x1":"11.949462878465056","y1":"8.987562035596966","x2":"11.949462878465056","y2":"8.997562035597184","key":"1"}),
    createElement(Line, {"x1":"11.949462878465056","y1":"14.997562035597184","x2":"11.949462878465056","y2":"11.997562035597184","key":"2"})
  );
});

InfoSquareSmall.displayName = 'InfoSquareSmall';

module.exports = InfoSquareSmall;
module.exports.InfoSquareSmall = InfoSquareSmall;
module.exports.default = InfoSquareSmall;
