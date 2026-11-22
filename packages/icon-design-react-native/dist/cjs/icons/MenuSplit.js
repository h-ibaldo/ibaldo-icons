'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const MenuSplit = forwardRef(function MenuSplit(
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
    createElement(Path, {"d":"M2 12L11 12","key":"1"}),
    createElement(Path, {"d":"M16 12L22 12","key":"2"}),
    createElement(Path, {"d":"M16 12L22 12","key":"3"}),
    createElement(Path, {"d":"M2 20L22 20","key":"4"})
  );
});

MenuSplit.displayName = 'MenuSplit';

module.exports = MenuSplit;
module.exports.MenuSplit = MenuSplit;
module.exports.default = MenuSplit;
