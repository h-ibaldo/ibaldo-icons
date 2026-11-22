'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SquareDoubleArrowDown = forwardRef(function SquareDoubleArrowDown(
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
    createElement(Path, {"d":"M2 21.125L2 15.875C2 15.391 2.391 15 2.875 15L8.125 15C8.609 15 9 15.391 9 15.875L9 21.125C9 21.609 8.609 22 8.125 22L2.875 22C2.391 22 2 21.609 2 21.125Z","key":"0"}),
    createElement(Path, {"d":"M2 8.125L2 2.875C2 2.391 2.391 2 2.875 2L8.125 2C8.609 2 9 2.391 9 2.875L9 8.125C9 8.609 8.609 9 8.125 9L2.875 9C2.391 9 2 8.609 2 8.125Z","key":"1"}),
    createElement(Path, {"d":"M18 2L18 22","key":"2"}),
    createElement(Path, {"d":"M14 18L18 22L22 18","key":"3"})
  );
});

SquareDoubleArrowDown.displayName = 'SquareDoubleArrowDown';

module.exports = SquareDoubleArrowDown;
module.exports.SquareDoubleArrowDown = SquareDoubleArrowDown;
module.exports.default = SquareDoubleArrowDown;
