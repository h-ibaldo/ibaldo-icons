'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TagTilted = forwardRef(function TagTilted(
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
    createElement(Path, {"d":"M20 5L20 10.586C20 10.852 19.895 11.105 19.707 11.293L10.707 20.293C10.316 20.684 9.684 20.684 9.293 20.293L3.707 14.707C3.316 14.316 3.316 13.684 3.707 13.293L12.707 4.293C12.895 4.105 13.148 4 13.414 4L19 4C19.551 4 20 4.449 20 5Z","key":"0"}),
    createElement(Path, {"d":"M15.5 9C15.777 9 16 8.777 16 8.5C16 8.223 15.777 8 15.5 8C15.223 8 15 8.223 15 8.5C15 8.777 15.223 9 15.5 9Z","key":"1"})
  );
});

TagTilted.displayName = 'TagTilted';

module.exports = TagTilted;
module.exports.TagTilted = TagTilted;
module.exports.default = TagTilted;
