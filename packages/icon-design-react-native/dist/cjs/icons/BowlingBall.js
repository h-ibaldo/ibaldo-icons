'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BowlingBall = forwardRef(function BowlingBall(
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
    createElement(Path, {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z","key":"0"}),
    createElement(Path, {"d":"M12.5 7.5C12.5 7.777 12.277 8 12 8C11.723 8 11.5 7.777 11.5 7.5C11.5 7.223 11.723 7 12 7C12.277 7 12.5 7.223 12.5 7.5Z","key":"1"}),
    createElement(Path, {"d":"M7.852 13.816C8.09 13.68 8.398 13.762 8.535 14C8.672 14.238 8.59 14.543 8.352 14.684C8.113 14.82 7.809 14.738 7.668 14.5C7.531 14.262 7.613 13.953 7.852 13.816Z","key":"2"}),
    createElement(Path, {"d":"M15.648 14.684C15.41 14.547 15.328 14.238 15.465 14C15.602 13.762 15.91 13.68 16.148 13.816C16.387 13.957 16.469 14.262 16.332 14.5C16.191 14.738 15.887 14.82 15.648 14.684Z","key":"3"})
  );
});

BowlingBall.displayName = 'BowlingBall';

module.exports = BowlingBall;
module.exports.BowlingBall = BowlingBall;
module.exports.default = BowlingBall;
