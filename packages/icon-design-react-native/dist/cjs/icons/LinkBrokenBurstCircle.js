'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkBrokenBurstCircle = forwardRef(function LinkBrokenBurstCircle(
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
    createElement(Path, {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement(Path, {"d":"M15 12L16.5 10.5C17.328 9.672 17.328 8.328 16.5 7.5C15.672 6.672 14.328 6.672 13.5 7.5L12 9","key":"1"}),
    createElement(Path, {"d":"M9 12L7.5 13.5C6.672 14.328 6.672 15.672 7.5 16.5C8.328 17.328 9.672 17.328 10.5 16.5L12 15","key":"2"}),
    createElement(Path, {"d":"M10 6L10 7","key":"3"}),
    createElement(Path, {"d":"M6 10L7 10","key":"4"}),
    createElement(Path, {"d":"M7.172 7.172L7.879 7.879","key":"5"}),
    createElement(Path, {"d":"M14 18L14 17","key":"6"}),
    createElement(Path, {"d":"M18 14L17 14","key":"7"}),
    createElement(Path, {"d":"M16.828 16.828L16.121 16.121","key":"8"})
  );
});

LinkBrokenBurstCircle.displayName = 'LinkBrokenBurstCircle';

module.exports = LinkBrokenBurstCircle;
module.exports.LinkBrokenBurstCircle = LinkBrokenBurstCircle;
module.exports.default = LinkBrokenBurstCircle;
