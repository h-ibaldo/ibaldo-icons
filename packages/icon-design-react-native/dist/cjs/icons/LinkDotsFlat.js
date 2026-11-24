'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkDotsFlat = forwardRef(function LinkDotsFlat(
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
    createElement(Path, {"d":"M6.5 10C4.016 10 2 12.016 2 14.5C2 16.984 4.016 19 6.5 19L10.5 19C12.984 19 15 16.984 15 14.5C15 14.328 14.973 14.164 14.949 14","key":"0"}),
    createElement(Path, {"d":"M17.5 19C19.984 19 22 16.984 22 14.5C22 12.016 19.984 10 17.5 10L13.5 10C11.016 10 9 12.016 9 14.5C9 14.672 9.027 14.836 9.051 15","key":"1"}),
    createElement(Path, {"d":"M3 5L3 5","key":"2"}),
    createElement(Path, {"d":"M7 5L7 5","key":"3"})
  );
});

LinkDotsFlat.displayName = 'LinkDotsFlat';

module.exports = LinkDotsFlat;
module.exports.LinkDotsFlat = LinkDotsFlat;
module.exports.default = LinkDotsFlat;
