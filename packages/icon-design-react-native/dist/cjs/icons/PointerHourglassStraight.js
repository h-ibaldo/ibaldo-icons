'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PointerHourglassStraight = forwardRef(function PointerHourglassStraight(
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
    createElement(Path, {"d":"M15 2L22 2L22 3.758C22 4.555 21.684 5.316 21.121 5.879L20 7L21.121 8.121C21.684 8.684 22 9.445 22 10.242L22 12L15 12L15 10.242C15 9.445 15.316 8.684 15.879 8.121L17 7L15.879 5.879C15.316 5.316 15 4.555 15 3.758Z","key":"1"})
  );
});

PointerHourglassStraight.displayName = 'PointerHourglassStraight';

module.exports = PointerHourglassStraight;
module.exports.PointerHourglassStraight = PointerHourglassStraight;
module.exports.default = PointerHourglassStraight;
