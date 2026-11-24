'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const VectorPolygon = forwardRef(function VectorPolygon(
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
    createElement(Path, {"d":"M16 7C16 5.344 17.344 4 19 4C20.656 4 22 5.344 22 7C22 8.656 20.656 10 19 10C17.344 10 16 8.656 16 7Z","key":"0"}),
    createElement(Path, {"d":"M2 18C2 16.344 3.344 15 5 15C6.656 15 8 16.344 8 18C8 19.656 6.656 21 5 21C3.344 21 2 19.656 2 18Z","key":"1"}),
    createElement(Path, {"d":"M19 16C20.656 16 22 17.344 22 19C22 20.656 20.656 22 19 22C17.344 22 16 20.656 16 19C16 17.344 17.344 16 19 16Z","key":"2"}),
    createElement(Path, {"d":"M7 2C8.656 2 10 3.344 10 5C10 6.656 8.656 8 7 8C5.344 8 4 6.656 4 5C4 3.344 5.344 2 7 2Z","key":"3"}),
    createElement(Path, {"d":"M10 5L16 7","key":"4"}),
    createElement(Path, {"d":"M8 18L16 19","key":"5"}),
    createElement(Path, {"d":"M10 5L16 7","key":"6"}),
    createElement(Path, {"d":"M19 10L19 16","key":"7"}),
    createElement(Path, {"d":"M8 18L16 19","key":"8"}),
    createElement(Path, {"d":"M7 8L5 15","key":"9"})
  );
});

VectorPolygon.displayName = 'VectorPolygon';

module.exports = VectorPolygon;
module.exports.VectorPolygon = VectorPolygon;
module.exports.default = VectorPolygon;
