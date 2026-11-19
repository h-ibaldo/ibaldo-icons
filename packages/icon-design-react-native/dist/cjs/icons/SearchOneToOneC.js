'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const SearchOneToOneC = forwardRef(function SearchOneToOneC(
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
    createElement(Circle, {"cx":"8.999999981002475","cy":"8.997562035418014","r":"7.000000000000001","key":"0"}),
    createElement(Line, {"x1":"21.999999981002475","y1":"21.997562035418014","x2":"13.999999981002475","y2":"13.997562035418014","key":"1"}),
    createElement(Line, {"x1":"5.999999980991561","y1":"6.997562035418014","x2":"5.999999980991561","y2":"10.997562035418014","key":"2"}),
    createElement(Line, {"x1":"11.999999980991561","y1":"6.997562035418014","x2":"11.999999980991561","y2":"10.997562035418014","key":"3"}),
    createElement(Line, {"x1":"8.999999980991561","y1":"7.007562035418232","x2":"8.999999980991561","y2":"6.997562035418014","key":"4"}),
    createElement(Line, {"x1":"8.999999980991561","y1":"11.007562035418232","x2":"8.999999980991561","y2":"10.997562035418014","key":"5"})
  );
});

SearchOneToOneC.displayName = 'SearchOneToOneC';

module.exports = SearchOneToOneC;
module.exports.SearchOneToOneC = SearchOneToOneC;
module.exports.default = SearchOneToOneC;
