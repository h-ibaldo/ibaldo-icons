'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUpFromPointCircle = forwardRef(function ArrowUpFromPointCircle(
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
    createElement(Path, {"d":"M9 5L12 2L15 5","key":"0"}),
    createElement(Path, {"d":"M12 11L12 2","key":"1"}),
    createElement(Path, {"d":"M12 15L12 15","key":"2"}),
    createElement(Path, {"d":"M5 4.883C3.152 6.695 2 9.207 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 9.207 20.848 6.695 19 4.883","key":"3"})
  );
});

ArrowUpFromPointCircle.displayName = 'ArrowUpFromPointCircle';

module.exports = ArrowUpFromPointCircle;
module.exports.ArrowUpFromPointCircle = ArrowUpFromPointCircle;
module.exports.default = ArrowUpFromPointCircle;
