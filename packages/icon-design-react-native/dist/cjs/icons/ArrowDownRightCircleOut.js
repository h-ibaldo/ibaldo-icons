'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowDownRightCircleOut = forwardRef(function ArrowDownRightCircleOut(
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
    createElement(Path, {"d":"M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12","key":"0"}),
    createElement(Path, {"d":"M22 17L22 22L17 22","key":"1"}),
    createElement(Path, {"d":"M22 22L12.5 12.5","key":"2"})
  );
});

ArrowDownRightCircleOut.displayName = 'ArrowDownRightCircleOut';

module.exports = ArrowDownRightCircleOut;
module.exports.ArrowDownRightCircleOut = ArrowDownRightCircleOut;
module.exports.default = ArrowDownRightCircleOut;
