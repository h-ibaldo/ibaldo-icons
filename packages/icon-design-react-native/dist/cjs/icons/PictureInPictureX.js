'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PictureInPictureX = forwardRef(function PictureInPictureX(
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
    createElement(Path, {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"0"}),
    createElement(Path, {"d":"M9 22L9 12C9 10.344 10.344 9 12 9L22 9","key":"1"}),
    createElement(Path, {"d":"M14 17.5L17.5 14","key":"2"}),
    createElement(Path, {"d":"M17.5 17.5L14 14","key":"3"})
  );
});

PictureInPictureX.displayName = 'PictureInPictureX';

module.exports = PictureInPictureX;
module.exports.PictureInPictureX = PictureInPictureX;
module.exports.default = PictureInPictureX;
