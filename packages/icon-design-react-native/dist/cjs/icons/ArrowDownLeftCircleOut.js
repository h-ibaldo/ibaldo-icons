'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowDownLeftCircleOut = forwardRef(function ArrowDownLeftCircleOut(
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
    createElement(Path, {"d":"M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12","key":"0"}),
    createElement(Path, {"d":"M2 17L2 22L7 22","key":"1"}),
    createElement(Path, {"d":"M2 22L11.5 12.5","key":"2"})
  );
});

ArrowDownLeftCircleOut.displayName = 'ArrowDownLeftCircleOut';

module.exports = ArrowDownLeftCircleOut;
module.exports.ArrowDownLeftCircleOut = ArrowDownLeftCircleOut;
module.exports.default = ArrowDownLeftCircleOut;
