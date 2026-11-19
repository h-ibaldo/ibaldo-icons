'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Text2DSquare = forwardRef(function Text2DSquare(
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
    createElement(Path, {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22Z","key":"0"}),
    createElement(Path, {"d":"M10 17L6 17L6 16.656C6 15.598 6.422 14.578 7.172 13.828L8.828 12.172C9.578 11.422 10 10.402 10 9.344L10 9C10 7.895 9.105 7 8 7C6.895 7 6 7.895 6 9L6 10","key":"1"}),
    createElement(Path, {"d":"M15 17L14 17L14 7L15 7C16.656 7 18 8.344 18 10L18 14C18 15.656 16.656 17 15 17Z","key":"2"})
  );
});

Text2DSquare.displayName = 'Text2DSquare';

module.exports = Text2DSquare;
module.exports.Text2DSquare = Text2DSquare;
module.exports.default = Text2DSquare;
