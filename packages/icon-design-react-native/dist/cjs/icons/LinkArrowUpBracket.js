'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkArrowUpBracket = forwardRef(function LinkArrowUpBracket(
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
    createElement(Path, {"d":"M9 22L7 22C4.238 22 2 19.762 2 17C2 14.238 4.238 12 7 12L9 12","key":"0"}),
    createElement(Path, {"d":"M15 12L17 12C19.762 12 22 14.238 22 17C22 19.762 19.762 22 17 22L15 22","key":"1"}),
    createElement(Path, {"d":"M8 17L16 17","key":"2"}),
    createElement(Path, {"d":"M22 5L19 2L16 5","key":"3"}),
    createElement(Path, {"d":"M19 8L19 2","key":"4"})
  );
});

LinkArrowUpBracket.displayName = 'LinkArrowUpBracket';

module.exports = LinkArrowUpBracket;
module.exports.LinkArrowUpBracket = LinkArrowUpBracket;
module.exports.default = LinkArrowUpBracket;
