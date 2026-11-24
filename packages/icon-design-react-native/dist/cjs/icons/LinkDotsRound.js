'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkDotsRound = forwardRef(function LinkDotsRound(
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
    createElement(Path, {"d":"M13 11.762C14.203 12.566 15 13.941 15 15.5C15 17.984 12.984 20 10.5 20L6.5 20C4.016 20 2 17.984 2 15.5C2 13.188 3.754 11.301 6 11.051","key":"0"}),
    createElement(Path, {"d":"M11 16.238C9.797 15.434 9 14.059 9 12.5C9 10.016 11.016 8 13.5 8L17.5 8C19.984 8 22 10.016 22 12.5C22 14.813 20.246 16.699 18 16.949","key":"1"}),
    createElement(Path, {"d":"M3 4L3 4","key":"2"}),
    createElement(Path, {"d":"M7 4L7 4","key":"3"})
  );
});

LinkDotsRound.displayName = 'LinkDotsRound';

module.exports = LinkDotsRound;
module.exports.LinkDotsRound = LinkDotsRound;
module.exports.default = LinkDotsRound;
