'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SquareDoubleArrowLeft = forwardRef(function SquareDoubleArrowLeft(
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
    createElement(Path, {"d":"M2.875 2L8.125 2C8.609 2 9 2.391 9 2.875L9 8.125C9 8.609 8.609 9 8.125 9L2.875 9C2.391 9 2 8.609 2 8.125L2 2.875C2 2.391 2.391 2 2.875 2Z","key":"0"}),
    createElement(Path, {"d":"M15.875 2L21.125 2C21.609 2 22 2.391 22 2.875L22 8.125C22 8.609 21.609 9 21.125 9L15.875 9C15.391 9 15 8.609 15 8.125L15 2.875C15 2.391 15.391 2 15.875 2Z","key":"1"}),
    createElement(Path, {"d":"M22 18L2 18","key":"2"}),
    createElement(Path, {"d":"M6 14L2 18L6 22","key":"3"})
  );
});

SquareDoubleArrowLeft.displayName = 'SquareDoubleArrowLeft';

module.exports = SquareDoubleArrowLeft;
module.exports.SquareDoubleArrowLeft = SquareDoubleArrowLeft;
module.exports.default = SquareDoubleArrowLeft;
