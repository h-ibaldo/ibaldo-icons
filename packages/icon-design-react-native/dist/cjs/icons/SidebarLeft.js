'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const SidebarLeft = forwardRef(function SidebarLeft(
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
    createElement(Rect, {"x":"1.99999997206578","y":"1.997697219891506","width":"20","height":"19.999864816289573","rx":"1.999999999975455","ry":"1.999999999975455","key":"0"}),
    createElement(Line, {"x1":"8.999999972054866","y1":"1.997562036587624","x2":"8.999999972054866","y2":"21.997562036587624","key":"1"}),
    createElement(Line, {"x1":"8.999999972054866","y1":"6.997562036587624","x2":"1.999999972054866","y2":"6.997562036587624","key":"2"})
  );
});

SidebarLeft.displayName = 'SidebarLeft';

module.exports = SidebarLeft;
module.exports.SidebarLeft = SidebarLeft;
module.exports.default = SidebarLeft;
