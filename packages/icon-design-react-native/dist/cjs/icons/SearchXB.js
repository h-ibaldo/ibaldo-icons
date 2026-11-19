'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const SearchXB = forwardRef(function SearchXB(
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
    createElement(Circle, {"cx":"10.000000018382707","cy":"9.99877930438015","r":"8","key":"0"}),
    createElement(Line, {"x1":"15.656860369943388","y1":"15.65563965594265","x2":"22.000000018382707","y2":"21.99877930438015","key":"1"}),
    createElement(Line, {"x1":"12.000000018382707","y1":"7.99877930438015","x2":"8.000000018382707","y2":"11.99877930438015","key":"2"}),
    createElement(Line, {"x1":"8.000000018382707","y1":"7.99877930438015","x2":"12.000000018382707","y2":"11.99877930438015","key":"3"})
  );
});

SearchXB.displayName = 'SearchXB';

module.exports = SearchXB;
module.exports.SearchXB = SearchXB;
module.exports.default = SearchXB;
