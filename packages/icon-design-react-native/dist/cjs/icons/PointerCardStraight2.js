'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PointerCardStraight2 = forwardRef(function PointerCardStraight2(
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
    createElement(Path, {"d":"M2 6.547L2 20.738C2 21.609 3.031 22.063 3.672 21.48L7.5 18L12.707 18C13.578 18 14.035 16.957 13.438 16.32L3.73 5.867C3.113 5.199 2 5.637 2 6.547Z","key":"0"}),
    createElement(Path, {"d":"M21 11L13 11C12.445 11 12 10.555 12 10L12 3C12 2.445 12.445 2 13 2L21 2C21.555 2 22 2.445 22 3L22 10C22 10.555 21.555 11 21 11Z","key":"1"}),
    createElement(Path, {"d":"M15 5L19 5","key":"2"}),
    createElement(Path, {"d":"M15 8L19 8","key":"3"})
  );
});

PointerCardStraight2.displayName = 'PointerCardStraight2';

module.exports = PointerCardStraight2;
module.exports.PointerCardStraight2 = PointerCardStraight2;
module.exports.default = PointerCardStraight2;
