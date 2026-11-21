'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CartSmall = forwardRef(function CartSmall(
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
    createElement(Path, {"d":"M2 4L4.492 4.832C4.809 4.938 5.055 5.195 5.141 5.516L7.801 15.262C7.918 15.699 8.313 16 8.766 16L18.199 16C18.668 16 19.07 15.676 19.176 15.219L20.73 8.219C20.867 7.594 20.395 7 19.754 7L6 7","key":"0"}),
    createElement(Path, {"d":"M10 20C10 20.551 9.551 21 9 21C8.449 21 8 20.551 8 20C8 19.449 8.449 19 9 19C9.551 19 10 19.449 10 20Z","key":"1"}),
    createElement(Path, {"d":"M20 20C20 20.551 19.551 21 19 21C18.449 21 18 20.551 18 20C18 19.449 18.449 19 19 19C19.551 19 20 19.449 20 20Z","key":"2"})
  );
});

CartSmall.displayName = 'CartSmall';

module.exports = CartSmall;
module.exports.CartSmall = CartSmall;
module.exports.default = CartSmall;
