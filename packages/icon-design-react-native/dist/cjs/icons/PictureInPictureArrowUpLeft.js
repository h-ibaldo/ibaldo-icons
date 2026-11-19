'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PictureInPictureArrowUpLeft = forwardRef(function PictureInPictureArrowUpLeft(
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
    createElement(Path, {"d":"M16 14L20 14C21.105 14 22 14.895 22 16L22 20C22 21.105 21.105 22 20 22L16 22C14.895 22 14 21.105 14 20L14 16C14 14.895 14.895 14 16 14Z","key":"0"}),
    createElement(Path, {"d":"M10 16L4 16C2.895 16 2 15.105 2 14L2 4C2 2.895 2.895 2 4 2L19 2C20.105 2 21 2.895 21 4L21 10","key":"1"}),
    createElement(Path, {"d":"M7 11L7 7L11 7","key":"2"}),
    createElement(Path, {"d":"M11 11L7 7","key":"3"})
  );
});

PictureInPictureArrowUpLeft.displayName = 'PictureInPictureArrowUpLeft';

module.exports = PictureInPictureArrowUpLeft;
module.exports.PictureInPictureArrowUpLeft = PictureInPictureArrowUpLeft;
module.exports.default = PictureInPictureArrowUpLeft;
