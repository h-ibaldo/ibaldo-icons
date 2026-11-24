'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowRightCircleSegmented = forwardRef(function ArrowRightCircleSegmented(
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
    createElement(Path, {"d":"M13 9L16 12L13 15","key":"0"}),
    createElement(Path, {"d":"M8 12L16 12","key":"1"}),
    createElement(Path, {"d":"M4.863 19C6.68 20.852 9.203 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C9.203 2 6.68 3.148 4.863 5","key":"2"}),
    createElement(Path, {"d":"M2.84 8C2.301 9.227 2 10.578 2 12C2 13.422 2.301 14.773 2.84 16","key":"3"})
  );
});

ArrowRightCircleSegmented.displayName = 'ArrowRightCircleSegmented';

module.exports = ArrowRightCircleSegmented;
module.exports.ArrowRightCircleSegmented = ArrowRightCircleSegmented;
module.exports.default = ArrowRightCircleSegmented;
