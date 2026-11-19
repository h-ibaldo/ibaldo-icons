'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUpLeftCircleOut = forwardRef(function ArrowUpLeftCircleOut(
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
    createElement(Path, {"d":"M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12","key":"0"}),
    createElement(Path, {"d":"M2 7L2 2L7 2","key":"1"}),
    createElement(Path, {"d":"M2 2L11.5 11.5","key":"2"})
  );
});

ArrowUpLeftCircleOut.displayName = 'ArrowUpLeftCircleOut';

module.exports = ArrowUpLeftCircleOut;
module.exports.ArrowUpLeftCircleOut = ArrowUpLeftCircleOut;
module.exports.default = ArrowUpLeftCircleOut;
