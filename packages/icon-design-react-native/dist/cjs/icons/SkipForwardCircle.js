'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SkipForwardCircle = forwardRef(function SkipForwardCircle(
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
    createElement(Path, {"d":"M7.719 8.945L7.719 15.055C7.719 15.871 8.641 16.344 9.301 15.871L13.582 12.813C14.141 12.414 14.141 11.586 13.582 11.188L9.301 8.129C8.641 7.656 7.719 8.129 7.719 8.945Z","key":"1"}),
    createElement(Path, {"d":"M16 8L16 16","key":"2"})
  );
});

SkipForwardCircle.displayName = 'SkipForwardCircle';

module.exports = SkipForwardCircle;
module.exports.SkipForwardCircle = SkipForwardCircle;
module.exports.default = SkipForwardCircle;
