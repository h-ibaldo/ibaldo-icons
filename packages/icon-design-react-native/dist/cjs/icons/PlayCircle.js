'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PlayCircle = forwardRef(function PlayCircle(
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
    createElement(Path, {"d":"M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2Z","key":"0"}),
    createElement(Path, {"d":"M9 15.195L9 8.805C9 8.02 9.863 7.539 10.531 7.957L15.645 11.152C16.27 11.543 16.27 12.457 15.645 12.848L10.531 16.043C9.863 16.461 9 15.98 9 15.195Z","key":"1"})
  );
});

PlayCircle.displayName = 'PlayCircle';

module.exports = PlayCircle;
module.exports.PlayCircle = PlayCircle;
module.exports.default = PlayCircle;
