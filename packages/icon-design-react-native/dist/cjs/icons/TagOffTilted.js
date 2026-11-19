'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TagOffTilted = forwardRef(function TagOffTilted(
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
    createElement(Path, {"d":"M15.5 9C15.777 9 16 8.777 16 8.5C16 8.223 15.777 8 15.5 8C15.223 8 15 8.223 15 8.5C15 8.777 15.223 9 15.5 9Z","key":"0"}),
    createElement(Path, {"d":"M5 6L18 19","key":"1"}),
    createElement(Path, {"d":"M17.5 13.5L19.707 11.293C19.895 11.105 20 10.852 20 10.586L20 5C20 4.449 19.551 4 19 4L13.414 4C13.148 4 12.895 4.105 12.707 4.293L10.5 6.5","key":"2"}),
    createElement(Path, {"d":"M8 9L3.707 13.293C3.316 13.684 3.316 14.316 3.707 14.707L9.293 20.293C9.684 20.684 10.316 20.684 10.707 20.293L15 16","key":"3"})
  );
});

TagOffTilted.displayName = 'TagOffTilted';

module.exports = TagOffTilted;
module.exports.TagOffTilted = TagOffTilted;
module.exports.default = TagOffTilted;
