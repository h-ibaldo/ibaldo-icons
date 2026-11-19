'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const MenuSquare = forwardRef(function MenuSquare(
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
    createElement(Line, {"x1":"7","y1":"12.000000078527592","x2":"17","y2":"12.000000078527592","key":"0"}),
    createElement(Line, {"x1":"7","y1":"7.000000078527592","x2":"17","y2":"7.000000078527592","key":"1"}),
    createElement(Line, {"x1":"7","y1":"17.000000078527592","x2":"17","y2":"17.000000078527592","key":"2"}),
    createElement(Rect, {"x":"2","y":"2.000000078527592","width":"20","height":"20","rx":"2","ry":"2","key":"3"})
  );
});

MenuSquare.displayName = 'MenuSquare';

module.exports = MenuSquare;
module.exports.MenuSquare = MenuSquare;
module.exports.default = MenuSquare;
