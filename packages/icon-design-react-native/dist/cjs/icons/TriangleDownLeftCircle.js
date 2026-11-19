'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TriangleDownLeftCircle = forwardRef(function TriangleDownLeftCircle(
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
    createElement(Path, {"d":"M8.289 11.289L12.711 15.711C13.27 16.27 14.223 15.992 14.395 15.223L15.66 9.535C15.816 8.82 15.18 8.184 14.465 8.34L8.777 9.605C8.008 9.777 7.73 10.73 8.289 11.289Z","key":"1"})
  );
});

TriangleDownLeftCircle.displayName = 'TriangleDownLeftCircle';

module.exports = TriangleDownLeftCircle;
module.exports.TriangleDownLeftCircle = TriangleDownLeftCircle;
module.exports.default = TriangleDownLeftCircle;
