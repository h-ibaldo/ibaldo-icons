'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BookLabelBlock = forwardRef(function BookLabelBlock(
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
    createElement(Path, {"d":"M19 21L7.5 21C6.117 21 5 19.883 5 18.5C5 17.117 6.117 16 7.5 16L19 16Z","key":"0"}),
    createElement(Path, {"d":"M5 18.5L5 5.5C5 4.117 6.117 3 7.5 3L19 3L19 16","key":"1"}),
    createElement(Path, {"d":"M9 8L15 8","key":"2"})
  );
});

BookLabelBlock.displayName = 'BookLabelBlock';

module.exports = BookLabelBlock;
module.exports.BookLabelBlock = BookLabelBlock;
module.exports.default = BookLabelBlock;
