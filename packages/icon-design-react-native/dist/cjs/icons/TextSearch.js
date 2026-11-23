'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextSearch = forwardRef(function TextSearch(
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
    createElement(Path, {"d":"M22.027 5L2 5","key":"0"}),
    createElement(Path, {"d":"M9 12L2 12","key":"1"}),
    createElement(Path, {"d":"M9 19L2 19","key":"2"}),
    createElement(Path, {"d":"M20 15.5C20 17.434 18.434 19 16.5 19C14.566 19 13 17.434 13 15.5C13 13.566 14.566 12 16.5 12C18.434 12 20 13.566 20 15.5Z","key":"3"}),
    createElement(Path, {"d":"M18.973 17.973L21 20","key":"4"})
  );
});

TextSearch.displayName = 'TextSearch';

module.exports = TextSearch;
module.exports.TextSearch = TextSearch;
module.exports.default = TextSearch;
