'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkBrokenDoubleApartCompact = forwardRef(function LinkBrokenDoubleApartCompact(
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
    createElement(Path, {"d":"M11 6L13.5 3.5C15.434 1.566 18.566 1.566 20.5 3.5C22.434 5.434 22.434 8.566 20.5 10.5L18 13","key":"0"}),
    createElement(Path, {"d":"M13 18L10.449 20.551C8.516 22.484 5.383 22.484 3.449 20.551C1.516 18.617 1.516 15.484 3.449 13.551L6 11","key":"1"}),
    createElement(Path, {"d":"M5 8L2 7","key":"2"}),
    createElement(Path, {"d":"M8 5L7 2","key":"3"}),
    createElement(Path, {"d":"M19 16L22 17","key":"4"}),
    createElement(Path, {"d":"M16 19L17 22","key":"5"})
  );
});

LinkBrokenDoubleApartCompact.displayName = 'LinkBrokenDoubleApartCompact';

module.exports = LinkBrokenDoubleApartCompact;
module.exports.LinkBrokenDoubleApartCompact = LinkBrokenDoubleApartCompact;
module.exports.default = LinkBrokenDoubleApartCompact;
