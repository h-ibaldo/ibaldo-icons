'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowConvergeRightCircle = forwardRef(function ArrowConvergeRightCircle(
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
    createElement(Path, {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement(Path, {"d":"M10 6L12 8L10 10","key":"1"}),
    createElement(Path, {"d":"M16 10L14 12L16 14","key":"2"}),
    createElement(Path, {"d":"M10 14L12 16L10 18","key":"3"}),
    createElement(Path, {"d":"M19 12L14 12","key":"4"}),
    createElement(Path, {"d":"M12 8L7 8","key":"5"}),
    createElement(Path, {"d":"M12 16L7 16","key":"6"})
  );
});

ArrowConvergeRightCircle.displayName = 'ArrowConvergeRightCircle';

module.exports = ArrowConvergeRightCircle;
module.exports.ArrowConvergeRightCircle = ArrowConvergeRightCircle;
module.exports.default = ArrowConvergeRightCircle;
