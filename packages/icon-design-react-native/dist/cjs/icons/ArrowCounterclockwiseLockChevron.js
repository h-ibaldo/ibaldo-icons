'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowCounterclockwiseLockChevron = forwardRef(function ArrowCounterclockwiseLockChevron(
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
    createElement(Path, {"d":"M7 2L4 5L7 8","key":"0"}),
    createElement(Path, {"d":"M12 5C16.418 5 20 8.582 20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13","key":"1"}),
    createElement(Path, {"d":"M4 5L12 5","key":"2"}),
    createElement(Path, {"d":"M15 16L9 16L9 12L15 12Z","key":"3"}),
    createElement(Path, {"d":"M14 12L10 12L10 11C10 9.895 10.895 9 12 9C13.105 9 14 9.895 14 11Z","key":"4"})
  );
});

ArrowCounterclockwiseLockChevron.displayName = 'ArrowCounterclockwiseLockChevron';

module.exports = ArrowCounterclockwiseLockChevron;
module.exports.ArrowCounterclockwiseLockChevron = ArrowCounterclockwiseLockChevron;
module.exports.default = ArrowCounterclockwiseLockChevron;
