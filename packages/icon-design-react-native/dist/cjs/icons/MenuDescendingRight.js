'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const MenuDescendingRight = forwardRef(function MenuDescendingRight(
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
    createElement(Path, {"d":"M2 4L22 4","key":"0"}),
    createElement(Path, {"d":"M9 12L22 12","key":"1"}),
    createElement(Path, {"d":"M17 20L22 20","key":"2"})
  );
});

MenuDescendingRight.displayName = 'MenuDescendingRight';

module.exports = MenuDescendingRight;
module.exports.MenuDescendingRight = MenuDescendingRight;
module.exports.default = MenuDescendingRight;
