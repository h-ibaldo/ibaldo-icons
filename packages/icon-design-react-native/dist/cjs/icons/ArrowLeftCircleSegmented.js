'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowLeftCircleSegmented = forwardRef(function ArrowLeftCircleSegmented(
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
    createElement(Path, {"d":"M11 9L8 12L11 15","key":"0"}),
    createElement(Path, {"d":"M16 12L8 12","key":"1"}),
    createElement(Path, {"d":"M19.137 5C17.32 3.148 14.797 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C14.797 22 17.32 20.852 19.137 19","key":"2"}),
    createElement(Path, {"d":"M21.16 16C21.699 14.773 22 13.422 22 12C22 10.578 21.699 9.227 21.16 8","key":"3"})
  );
});

ArrowLeftCircleSegmented.displayName = 'ArrowLeftCircleSegmented';

module.exports = ArrowLeftCircleSegmented;
module.exports.ArrowLeftCircleSegmented = ArrowLeftCircleSegmented;
module.exports.default = ArrowLeftCircleSegmented;
