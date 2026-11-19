'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const ListSearchDash = forwardRef(function ListSearchDash(
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
    createElement(Line, {"x1":"1.999999976489562","y1":"1.998779299956368","x2":"2.999999976489562","y2":"1.998779299956368","key":"0"}),
    createElement(Line, {"x1":"1.999999976489562","y1":"5.998779299956368","x2":"2.999999976489562","y2":"5.998779299956368","key":"1"}),
    createElement(Line, {"x1":"1.999999976489562","y1":"9.998779299956368","x2":"2.999999976489562","y2":"9.998779299956368","key":"2"}),
    createElement(Line, {"x1":"6.999999976489562","y1":"1.998779299956368","x2":"14.999999976489562","y2":"1.998779299956368","key":"3"}),
    createElement(Line, {"x1":"6.999999976489562","y1":"5.998779299956368","x2":"14.999999976489562","y2":"5.998779299956368","key":"4"}),
    createElement(Line, {"x1":"6.999999976489562","y1":"9.998779299956368","x2":"8.999999976489562","y2":"9.998779299956368","key":"5"}),
    createElement(Circle, {"cx":"16.499999976489562","cy":"14.498779299956368","r":"5.5","key":"6"}),
    createElement(Line, {"x1":"12.61090085539945","y1":"18.387878421050118","x2":"8.999999976489562","y2":"21.998779299956368","key":"7"})
  );
});

ListSearchDash.displayName = 'ListSearchDash';

module.exports = ListSearchDash;
module.exports.ListSearchDash = ListSearchDash;
module.exports.default = ListSearchDash;
