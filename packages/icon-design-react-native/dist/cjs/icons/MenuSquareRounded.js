'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const MenuSquareRounded = forwardRef(function MenuSquareRounded(
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
    createElement(Line, {"x1":"7.000000004889444","y1":"7.999999995256076","x2":"17.000000004889444","y2":"7.999999995256076","key":"0"}),
    createElement(Line, {"x1":"7.000000004889444","y1":"11.999999995256076","x2":"17.000000004889444","y2":"11.999999995256076","key":"1"}),
    createElement(Line, {"x1":"7.000000004889444","y1":"15.999999995256076","x2":"17.000000004889444","y2":"15.999999995256076","key":"2"}),
    createElement(Rect, {"x":"2.000000004889444","y":"1.999999995256076","width":"20","height":"20","rx":"5","ry":"5","key":"3"})
  );
});

MenuSquareRounded.displayName = 'MenuSquareRounded';

module.exports = MenuSquareRounded;
module.exports.MenuSquareRounded = MenuSquareRounded;
module.exports.default = MenuSquareRounded;
