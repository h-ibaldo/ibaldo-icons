'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const AlarmXArc = forwardRef(function AlarmXArc(
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
    createElement(Path, {"d":"M18 19L20 21","key":"0"}),
    createElement(Path, {"d":"M6 19L4 21","key":"1"}),
    createElement(Path, {"d":"M20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13C4 8.582 7.582 5 12 5C16.418 5 20 8.582 20 13Z","key":"2"}),
    createElement(Path, {"d":"M22 6.5C22 4.566 20.434 3 18.5 3","key":"3"}),
    createElement(Path, {"d":"M2 6.5C2 4.566 3.566 3 5.5 3","key":"4"}),
    createElement(Path, {"d":"M10 15L14 11","key":"5"}),
    createElement(Path, {"d":"M14 15L10 11","key":"6"})
  );
});

AlarmXArc.displayName = 'AlarmXArc';

module.exports = AlarmXArc;
module.exports.AlarmXArc = AlarmXArc;
module.exports.default = AlarmXArc;
