'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BookshelfDouble = forwardRef(function BookshelfDouble(
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
    createElement(Path, {"d":"M4 2L4 22","key":"0"}),
    createElement(Path, {"d":"M20 2L20 22","key":"1"}),
    createElement(Path, {"d":"M4 4L20 4","key":"2"}),
    createElement(Path, {"d":"M4 12L20 12","key":"3"}),
    createElement(Path, {"d":"M4 20L20 20","key":"4"}),
    createElement(Path, {"d":"M8 7L8 12","key":"5"}),
    createElement(Path, {"d":"M12 7L12 12","key":"6"}),
    createElement(Path, {"d":"M8 15L8 20","key":"7"}),
    createElement(Path, {"d":"M12 15L12 20","key":"8"}),
    createElement(Path, {"d":"M16 15L16 20","key":"9"}),
    createElement(Path, {"d":"M15 7L17 12","key":"10"})
  );
});

BookshelfDouble.displayName = 'BookshelfDouble';

module.exports = BookshelfDouble;
module.exports.BookshelfDouble = BookshelfDouble;
module.exports.default = BookshelfDouble;
