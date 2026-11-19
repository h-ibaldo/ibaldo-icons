'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkBrokenDoubleBracket = forwardRef(function LinkBrokenDoubleBracket(
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
    createElement(Path, {"d":"M9 16L6 16C3.789 16 2 14.211 2 12C2 9.789 3.789 8 6 8L9 8","key":"0"}),
    createElement(Path, {"d":"M15 16L18 16C20.211 16 22 14.211 22 12C22 9.789 20.211 8 18 8L15 8","key":"1"}),
    createElement(Path, {"d":"M8 2L9 4","key":"2"}),
    createElement(Path, {"d":"M16 2L15 4","key":"3"}),
    createElement(Path, {"d":"M8 22L9 20","key":"4"}),
    createElement(Path, {"d":"M16 22L15 20","key":"5"})
  );
});

LinkBrokenDoubleBracket.displayName = 'LinkBrokenDoubleBracket';

module.exports = LinkBrokenDoubleBracket;
module.exports.LinkBrokenDoubleBracket = LinkBrokenDoubleBracket;
module.exports.default = LinkBrokenDoubleBracket;
