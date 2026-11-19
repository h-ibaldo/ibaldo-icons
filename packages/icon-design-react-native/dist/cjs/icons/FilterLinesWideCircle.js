'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const FilterLinesWideCircle = forwardRef(function FilterLinesWideCircle(
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
    createElement(Circle, {"cx":"11.974731449501633","cy":"12.000000000479986","r":"10.000000000000341","key":"0"}),
    createElement(Line, {"x1":"6.974731449501633","y1":"8.000000000480213","x2":"16.974731449501633","y2":"8.000000000480213","key":"1"}),
    createElement(Line, {"x1":"7.974731449501633","y1":"12.000000000480213","x2":"15.974731449501633","y2":"12.000000000480213","key":"2"}),
    createElement(Line, {"x1":"8.974731449501633","y1":"16.000000000480213","x2":"14.974731449501633","y2":"16.000000000480213","key":"3"})
  );
});

FilterLinesWideCircle.displayName = 'FilterLinesWideCircle';

module.exports = FilterLinesWideCircle;
module.exports.FilterLinesWideCircle = FilterLinesWideCircle;
module.exports.default = FilterLinesWideCircle;
