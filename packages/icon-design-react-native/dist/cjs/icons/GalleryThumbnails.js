'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const GalleryThumbnails = forwardRef(function GalleryThumbnails(
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
    createElement(Path, {"d":"M2 22L3.973 22","key":"0"}),
    createElement(Path, {"d":"M8 22L9.973 22","key":"1"}),
    createElement(Path, {"d":"M14 22L15.973 22","key":"2"}),
    createElement(Path, {"d":"M20 22L21.973 22","key":"3"}),
    createElement(Path, {"d":"M20 18L4 18C2.895 18 2 17.105 2 16L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 16C22 17.105 21.105 18 20 18Z","key":"4"})
  );
});

GalleryThumbnails.displayName = 'GalleryThumbnails';

module.exports = GalleryThumbnails;
module.exports.GalleryThumbnails = GalleryThumbnails;
module.exports.default = GalleryThumbnails;
