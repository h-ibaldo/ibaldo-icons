'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line } = RNSvg;

const MenuTight = forwardRef(function MenuTight(
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
    createElement(Line, {"x1":"2","y1":"12.000000078527592","x2":"22","y2":"12.000000078527592","key":"0"}),
    createElement(Line, {"x1":"2","y1":"7.000000078527592","x2":"22","y2":"7.000000078527592","key":"1"}),
    createElement(Line, {"x1":"2","y1":"17.000000078527592","x2":"22","y2":"17.000000078527592","key":"2"})
  );
});

MenuTight.displayName = 'MenuTight';

module.exports = MenuTight;
module.exports.MenuTight = MenuTight;
module.exports.default = MenuTight;
