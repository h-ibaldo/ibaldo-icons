'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line } = RNSvg;

const MenuDescending = forwardRef(function MenuDescending(
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
    createElement(Line, {"x1":"4.000000004889444","y1":"11.999999995256076","x2":"15.000000004889444","y2":"11.999999995256076","key":"0"}),
    createElement(Line, {"x1":"4.000000004889444","y1":"4.999999995256076","x2":"20.000000004889444","y2":"4.999999995256076","key":"1"}),
    createElement(Line, {"x1":"4.000000004889444","y1":"18.999999995256076","x2":"10.000000004889444","y2":"18.999999995256076","key":"2"})
  );
});

MenuDescending.displayName = 'MenuDescending';

module.exports = MenuDescending;
module.exports.MenuDescending = MenuDescending;
module.exports.default = MenuDescending;
