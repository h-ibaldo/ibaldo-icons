'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextHollow = forwardRef(function TextHollow(
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
    createElement(Path, {"d":"M4 3L20 3C21.105 3 22 3.895 22 5L22 9C22 10.105 21.105 11 20 11C18.895 11 18 10.105 18 9L18 7L14 7L14 18L17 18C18.105 18 19 18.895 19 20C19 21.105 18.105 22 17 22L7 22C5.895 22 5 21.105 5 20C5 18.895 5.895 18 7 18L10 18L10 7L6 7L6 9C6 10.105 5.105 11 4 11C2.895 11 2 10.105 2 9L2 5C2 3.895 2.895 3 4 3Z","key":"0"})
  );
});

TextHollow.displayName = 'TextHollow';

module.exports = TextHollow;
module.exports.TextHollow = TextHollow;
module.exports.default = TextHollow;
