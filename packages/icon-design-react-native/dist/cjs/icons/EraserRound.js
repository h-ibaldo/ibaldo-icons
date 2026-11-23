'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const EraserRound = forwardRef(function EraserRound(
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
    createElement(Path, {"d":"M14 2L7 9L15 17L22 10Z","key":"0"}),
    createElement(Path, {"d":"M3 22L21 22","key":"1"}),
    createElement(Path, {"d":"M14.5 16.5L11.414 19.586C10.633 20.367 9.367 20.367 8.586 19.586L4.414 15.414C3.633 14.633 3.633 13.367 4.414 12.586L7.5 9.5","key":"2"})
  );
});

EraserRound.displayName = 'EraserRound';

module.exports = EraserRound;
module.exports.EraserRound = EraserRound;
module.exports.default = EraserRound;
