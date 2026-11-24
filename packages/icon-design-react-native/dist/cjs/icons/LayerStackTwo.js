'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LayerStackTwo = forwardRef(function LayerStackTwo(
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
    createElement(Path, {"d":"M10.973 2.617L3.43 7.141C2.781 7.531 2.781 8.469 3.43 8.859L10.973 13.383C11.605 13.762 12.395 13.762 13.027 13.383L20.57 8.859C21.219 8.469 21.219 7.531 20.57 7.141L13.027 2.617C12.395 2.238 11.605 2.238 10.973 2.617Z","key":"0"}),
    createElement(Path, {"d":"M15.332 12L20.57 15.141C21.219 15.531 21.219 16.469 20.57 16.859L13.027 21.383C12.395 21.762 11.605 21.762 10.973 21.383L3.43 16.859C2.781 16.469 2.781 15.531 3.43 15.141L8.668 12","key":"1"})
  );
});

LayerStackTwo.displayName = 'LayerStackTwo';

module.exports = LayerStackTwo;
module.exports.LayerStackTwo = LayerStackTwo;
module.exports.default = LayerStackTwo;
