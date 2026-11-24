'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const GalleryVertical = forwardRef(function GalleryVertical(
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
    createElement(Path, {"d":"M2 2L22 2","key":"0"}),
    createElement(Path, {"d":"M2 22L22 22","key":"1"}),
    createElement(Path, {"d":"M20 17L4 17C2.895 17 2 16.105 2 15L2 9C2 7.895 2.895 7 4 7L20 7C21.105 7 22 7.895 22 9L22 15C22 16.105 21.105 17 20 17Z","key":"2"})
  );
});

GalleryVertical.displayName = 'GalleryVertical';

module.exports = GalleryVertical;
module.exports.GalleryVertical = GalleryVertical;
module.exports.default = GalleryVertical;
