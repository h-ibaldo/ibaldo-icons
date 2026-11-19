'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkSquareSlanted = forwardRef(function LinkSquareSlanted(
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
    createElement(Path, {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z","key":"0"}),
    createElement(Path, {"d":"M16.5 11.5C17.605 10.395 17.605 8.605 16.5 7.5C15.395 6.395 13.605 6.395 12.5 7.5L10.828 9.172C9.723 10.277 9.723 12.066 10.828 13.172","key":"1"}),
    createElement(Path, {"d":"M7.5 12.5C6.395 13.605 6.395 15.395 7.5 16.5C8.605 17.605 10.395 17.605 11.5 16.5L13.172 14.828C14.277 13.723 14.277 11.934 13.172 10.828","key":"2"})
  );
});

LinkSquareSlanted.displayName = 'LinkSquareSlanted';

module.exports = LinkSquareSlanted;
module.exports.LinkSquareSlanted = LinkSquareSlanted;
module.exports.default = LinkSquareSlanted;
