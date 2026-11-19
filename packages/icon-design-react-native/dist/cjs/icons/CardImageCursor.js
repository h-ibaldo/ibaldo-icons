'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CardImageCursor = forwardRef(function CardImageCursor(
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
    createElement(Path, {"d":"M22 13L22 4C22 2.895 21.105 2 20 2L4 2C2.895 2 2 2.895 2 4L2 20C2 21.105 2.895 22 4 22L13 22","key":"0"}),
    createElement(Path, {"d":"M18 12L18 6L6 6L6 14L10 14","key":"1"}),
    createElement(Path, {"d":"M12 18L6 18","key":"2"}),
    createElement(Path, {"d":"M22 22L19 19","key":"3"}),
    createElement(Path, {"d":"M22 17L14 14L17 22L18 18Z","key":"4"})
  );
});

CardImageCursor.displayName = 'CardImageCursor';

module.exports = CardImageCursor;
module.exports.CardImageCursor = CardImageCursor;
module.exports.default = CardImageCursor;
