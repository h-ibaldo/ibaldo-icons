'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SearchBrackets = forwardRef(function SearchBrackets(
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
    createElement(Path, {"d":"M13 8L16 11L13 14","key":"0"}),
    createElement(Path, {"d":"M9 8L6 11L9 14","key":"1"}),
    createElement(Path, {"d":"M20 11C20 15.973 15.973 20 11 20C6.027 20 2 15.973 2 11C2 6.027 6.027 2 11 2C15.973 2 20 6.027 20 11Z","key":"2"}),
    createElement(Path, {"d":"M17.363 17.363L22 22","key":"3"})
  );
});

SearchBrackets.displayName = 'SearchBrackets';

module.exports = SearchBrackets;
module.exports.SearchBrackets = SearchBrackets;
module.exports.default = SearchBrackets;
