'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const RulerTilted = forwardRef(function RulerTilted(
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
    createElement(Path, {"d":"M8.465 2.809L21.191 15.535C21.582 15.926 21.582 16.559 21.191 16.949L16.949 21.191C16.559 21.582 15.926 21.582 15.535 21.191L2.809 8.465C2.418 8.074 2.418 7.441 2.809 7.051L7.051 2.809C7.441 2.418 8.074 2.418 8.465 2.809Z","key":"0"}),
    createElement(Path, {"d":"M8.465 7.051L10.586 4.93","key":"1"}),
    createElement(Path, {"d":"M11.293 9.879L13.414 7.758","key":"2"}),
    createElement(Path, {"d":"M14.121 12.707L16.242 10.586","key":"3"}),
    createElement(Path, {"d":"M16.949 15.535L19.07 13.414","key":"4"})
  );
});

RulerTilted.displayName = 'RulerTilted';

module.exports = RulerTilted;
module.exports.RulerTilted = RulerTilted;
module.exports.default = RulerTilted;
