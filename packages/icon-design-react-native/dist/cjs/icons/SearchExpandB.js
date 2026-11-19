'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Polyline } = RNSvg;

const SearchExpandB = forwardRef(function SearchExpandB(
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
    createElement(Circle, {"cx":"9.97473141752198","cy":"9.998779298535737","r":"8","key":"0"}),
    createElement(Line, {"x1":"15.631591769080842","y1":"15.655639650098237","x2":"21.97473141752198","y2":"21.998779298535737","key":"1"}),
    createElement(Polyline, {"points":"6.974731417511066 7.998779298535737 6.974731417511066 6.998779298535737 7.974731417511066 6.998779298535737","key":"2"}),
    createElement(Polyline, {"points":"11.974731417492876 12.998779298513909 12.974731417492876 12.998779298557565 12.974731417532894 11.998779298557565","key":"3"}),
    createElement(Polyline, {"points":"7.974731417381918 12.998779298470254 6.974731417381918 12.99877929842296 6.974731417421935 11.99877929842296","key":"4"}),
    createElement(Polyline, {"points":"12.974731417582007 7.998779298713998 12.974731417671137 6.998779298713998 11.974731417671137 6.998779298626687","key":"5"}),
    createElement(Line, {"x1":"6.974731417511066","y1":"6.998779298535737","x2":"12.974731417511066","y2":"12.998779298535737","key":"6"}),
    createElement(Line, {"x1":"6.974731417372823","y1":"12.998779298401132","x2":"12.974731417642033","y2":"6.998779298670343","key":"7"})
  );
});

SearchExpandB.displayName = 'SearchExpandB';

module.exports = SearchExpandB;
module.exports.SearchExpandB = SearchExpandB;
module.exports.default = SearchExpandB;
