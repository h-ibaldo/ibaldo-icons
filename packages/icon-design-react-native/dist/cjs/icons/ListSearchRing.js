'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const ListSearchRing = forwardRef(function ListSearchRing(
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
    createElement(Circle, {"cx":"17.999999976489562","cy":"15.998779299956368","r":"4","key":"0"}),
    createElement(Line, {"x1":"15.171569800710131","y1":"18.827209475737618","x2":"11.999999976489562","y2":"21.998779299956368","key":"1"}),
    createElement(Circle, {"cx":"2.999999976485014","cy":"2.998779299956368","r":"1.000000000002274","key":"2"}),
    createElement(Circle, {"cx":"2.999999976485014","cy":"7.998779299956368","r":"1.000000000002274","key":"3"}),
    createElement(Circle, {"cx":"2.999999976485014","cy":"12.998779299956368","r":"1.000000000002274","key":"4"}),
    createElement(Line, {"x1":"7.999999976489562","y1":"2.998779299956368","x2":"18.999999976489562","y2":"2.998779299956368","key":"5"}),
    createElement(Line, {"x1":"7.999999976489562","y1":"7.998779299956368","x2":"18.999999976489562","y2":"7.998779299956368","key":"6"}),
    createElement(Line, {"x1":"7.999999976489562","y1":"12.998779299956368","x2":"10.999999976489562","y2":"12.998779299956368","key":"7"})
  );
});

ListSearchRing.displayName = 'ListSearchRing';

module.exports = ListSearchRing;
module.exports.ListSearchRing = ListSearchRing;
module.exports.default = ListSearchRing;
