'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BoxFrontMinus = forwardRef(function BoxFrontMinus(
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
    createElement(Path, {"d":"M21 22L3 22C2.449 22 2 21.551 2 21L2 7.352C2 7.125 2.078 6.902 2.219 6.727L5.699 2.375C5.891 2.137 6.176 2 6.48 2L17.52 2C17.824 2 18.109 2.137 18.301 2.375L21.781 6.727C21.922 6.902 22 7.125 22 7.352L22 21C22 21.551 21.551 22 21 22Z","key":"0"}),
    createElement(Path, {"d":"M2 8L22 8","key":"1"}),
    createElement(Path, {"d":"M12 2L12 8","key":"2"}),
    createElement(Path, {"d":"M9 15L15 15","key":"3"})
  );
});

BoxFrontMinus.displayName = 'BoxFrontMinus';

module.exports = BoxFrontMinus;
module.exports.BoxFrontMinus = BoxFrontMinus;
module.exports.default = BoxFrontMinus;
