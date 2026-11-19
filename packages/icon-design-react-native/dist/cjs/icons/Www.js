'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Www = forwardRef(function Www(
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
    createElement(Path, {"d":"M2 8.008L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 8","key":"0"}),
    createElement(Path, {"d":"M2 8L22 8","key":"1"}),
    createElement(Path, {"d":"M2 12L2 16L2.5 17L4 15L5.5 17L6 16L6 12","key":"2"}),
    createElement(Path, {"d":"M10 12L10 16L10.5 17L12 15L13.5 17L14 16L14 12","key":"3"}),
    createElement(Path, {"d":"M18 12L18 16L18.5 17L20 15L21.5 17L22 16L22 12","key":"4"}),
    createElement(Path, {"d":"M2 21C2 21.551 2.449 22 3 22L21 22C21.551 22 22 21.551 22 21","key":"5"})
  );
});

Www.displayName = 'Www';

module.exports = Www;
module.exports.Www = Www;
module.exports.default = Www;
