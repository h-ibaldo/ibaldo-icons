'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const SearchC = forwardRef(function SearchC(
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
    createElement(Circle, {"cx":"9.000000014042598","cy":"8.998779305395146","r":"7.000000000000001","key":"0"}),
    createElement(Line, {"x1":"22.000000014042598","y1":"21.998779305395146","x2":"14.000000014042598","y2":"13.998779305395146","key":"1"})
  );
});

SearchC.displayName = 'SearchC';

module.exports = SearchC;
module.exports.SearchC = SearchC;
module.exports.default = SearchC;
