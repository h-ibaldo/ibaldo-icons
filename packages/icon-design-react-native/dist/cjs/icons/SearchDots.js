'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const SearchDots = forwardRef(function SearchDots(
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
    createElement(Circle, {"cx":"10.999999993273377","cy":"10.998779299955459","r":"8.999999999998636","key":"0"}),
    createElement(Line, {"x1":"17.363952629993946","y1":"17.362731936675118","x2":"21.999999993273377","y2":"21.998779299956368","key":"1"}),
    createElement(Line, {"x1":"6.999999993283382","y1":"11.008779299956586","x2":"6.999999993283382","y2":"10.998779299956368","key":"2"}),
    createElement(Line, {"x1":"10.999999993283382","y1":"11.008779299956586","x2":"10.999999993283382","y2":"10.998779299956368","key":"3"}),
    createElement(Line, {"x1":"14.999999993283382","y1":"11.008779299956586","x2":"14.999999993283382","y2":"10.998779299956368","key":"4"})
  );
});

SearchDots.displayName = 'SearchDots';

module.exports = SearchDots;
module.exports.SearchDots = SearchDots;
module.exports.default = SearchDots;
