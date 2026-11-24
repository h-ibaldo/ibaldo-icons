'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BookSearch = forwardRef(function BookSearch(
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
    createElement(Path, {"d":"M19 17L7 17C5.895 17 5 17.895 5 19C5 20.105 5.895 21 7 21L19 21","key":"0"}),
    createElement(Path, {"d":"M19 17L19 3L7 3C5.895 3 5 3.895 5 5","key":"1"}),
    createElement(Path, {"d":"M5 5L5 19","key":"2"}),
    createElement(Path, {"d":"M15 9.5C15 11.434 13.434 13 11.5 13C9.566 13 8 11.434 8 9.5C8 7.566 9.566 6 11.5 6C13.434 6 15 7.566 15 9.5Z","key":"3"}),
    createElement(Path, {"d":"M13.973 11.973L16 14","key":"4"})
  );
});

BookSearch.displayName = 'BookSearch';

module.exports = BookSearch;
module.exports.BookSearch = BookSearch;
module.exports.default = BookSearch;
