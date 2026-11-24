'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowRightFromPointCircle = forwardRef(function ArrowRightFromPointCircle(
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
    createElement(Path, {"d":"M19 9L22 12L19 15","key":"0"}),
    createElement(Path, {"d":"M13 12L22 12","key":"1"}),
    createElement(Path, {"d":"M9 12L9 12","key":"2"}),
    createElement(Path, {"d":"M19.117 5C17.305 3.152 14.793 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C14.793 22 17.305 20.848 19.117 19","key":"3"})
  );
});

ArrowRightFromPointCircle.displayName = 'ArrowRightFromPointCircle';

module.exports = ArrowRightFromPointCircle;
module.exports.ArrowRightFromPointCircle = ArrowRightFromPointCircle;
module.exports.default = ArrowRightFromPointCircle;
