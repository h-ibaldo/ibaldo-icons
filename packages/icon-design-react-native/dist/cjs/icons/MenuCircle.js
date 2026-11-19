'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const MenuCircle = forwardRef(function MenuCircle(
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
    createElement(Line, {"x1":"8","y1":"12.000000078527592","x2":"16","y2":"12.000000078527592","key":"0"}),
    createElement(Line, {"x1":"8","y1":"8.000000078527592","x2":"16","y2":"8.000000078527592","key":"1"}),
    createElement(Line, {"x1":"8","y1":"16.000000078527592","x2":"16","y2":"16.000000078527592","key":"2"}),
    createElement(Circle, {"cx":"11.999999999989996","cy":"12.000000078527592","r":"10","key":"3"})
  );
});

MenuCircle.displayName = 'MenuCircle';

module.exports = MenuCircle;
module.exports.MenuCircle = MenuCircle;
module.exports.default = MenuCircle;
