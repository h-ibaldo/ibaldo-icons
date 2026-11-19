'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path } = RNSvg;

const BrowserSearch = forwardRef(function BrowserSearch(
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
    createElement(Path, {"d":"M9.999999976300387,21.960388185868396H3.999999976300387c-1.104569499661011,0-2-.895430500338989-2-2V3.960388185868396c0-1.10456949966192.895430500338989-2,2-2h16c1.104569499659192,0,2,.89543050033808,2,2v9.076782226561591","key":"0"}),
    createElement(Line, {"x1":"1.999999976300387","y1":"7.960388185868396","x2":"21.999999976300387","y2":"7.960388185868396","key":"1"}),
    createElement(Line, {"x1":"5.009999976300605","y1":"4.960388185868396","x2":"4.999999976300387","y2":"4.960388185868396","key":"2"}),
    createElement(Line, {"x1":"8.009999976300605","y1":"4.960388185868396","x2":"7.999999976300387","y2":"4.960388185868396","key":"3"}),
    createElement(Line, {"x1":"18.9999999763495","y1":"4.960388185868396","x2":"10.999999976300387","y2":"4.960388185868396","key":"4"}),
    createElement(Circle, {"cx":"14.999999976300387","cy":"16.037170412430896","r":"4.000000000000455","key":"5"}),
    createElement(Line, {"x1":"20.999999976300387","y1":"22.037170412429987","x2":"17.78637692941993","y2":"18.900329592118396","key":"6"})
  );
});

BrowserSearch.displayName = 'BrowserSearch';

module.exports = BrowserSearch;
module.exports.BrowserSearch = BrowserSearch;
module.exports.default = BrowserSearch;
