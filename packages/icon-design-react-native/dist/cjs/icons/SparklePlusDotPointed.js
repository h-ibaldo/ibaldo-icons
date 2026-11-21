'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SparklePlusDotPointed = forwardRef(function SparklePlusDotPointed(
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
    createElement(Path, {"d":"M12 3L10 10L3 12L10 14L12 21L14 14L21 12L14 10Z","key":"0"}),
    createElement(Path, {"d":"M17 5C17 3.895 17.895 3 19 3C20.105 3 21 3.895 21 5C21 6.105 20.105 7 19 7C17.895 7 17 6.105 17 5Z","key":"1"}),
    createElement(Path, {"d":"M5.5 16L5.5 21","key":"2"}),
    createElement(Path, {"d":"M8 18.5L3 18.5","key":"3"})
  );
});

SparklePlusDotPointed.displayName = 'SparklePlusDotPointed';

module.exports = SparklePlusDotPointed;
module.exports.SparklePlusDotPointed = SparklePlusDotPointed;
module.exports.default = SparklePlusDotPointed;
