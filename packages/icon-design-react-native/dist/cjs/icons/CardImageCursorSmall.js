'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CardImageCursorSmall = forwardRef(function CardImageCursorSmall(
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
    createElement(Path, {"d":"M22 15L22 4C22 2.895 21.105 2 20 2L4 2C2.895 2 2 2.895 2 4L2 20C2 21.105 2.895 22 4 22L15 22","key":"0"}),
    createElement(Path, {"d":"M6 14L18 14L18 6L6 6Z","key":"1"}),
    createElement(Path, {"d":"M14 18L11 18","key":"2"}),
    createElement(Path, {"d":"M7 18L6 18","key":"3"}),
    createElement(Path, {"d":"M22 22L19 19","key":"4"}),
    createElement(Path, {"d":"M22 19L18 18L19 22","key":"5"})
  );
});

CardImageCursorSmall.displayName = 'CardImageCursorSmall';

module.exports = CardImageCursorSmall;
module.exports.CardImageCursorSmall = CardImageCursorSmall;
module.exports.default = CardImageCursorSmall;
