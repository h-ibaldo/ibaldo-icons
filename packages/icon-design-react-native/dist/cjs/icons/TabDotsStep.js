'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polygon } = RNSvg;

const TabDotsStep = forwardRef(function TabDotsStep(
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
    createElement(Polygon, {"points":"22 21.999999999999091 2 21.999999999999091 2 1.999999999999091 11 1.999999999999091 11 5.999999999999091 22 5.999999999999091 22 21.999999999999091","key":"0"}),
    createElement(Line, {"x1":"22","y1":"1.999999999999091","x2":"15","y2":"1.999999999999091","key":"1"}),
    createElement(Line, {"x1":"8","y1":"14.009999999999309","x2":"8","y2":"13.999999999999091","key":"2"}),
    createElement(Line, {"x1":"12","y1":"14.009999999999309","x2":"12","y2":"13.999999999999091","key":"3"}),
    createElement(Line, {"x1":"16","y1":"14.009999999999309","x2":"16","y2":"13.999999999999091","key":"4"})
  );
});

TabDotsStep.displayName = 'TabDotsStep';

module.exports = TabDotsStep;
module.exports.TabDotsStep = TabDotsStep;
module.exports.default = TabDotsStep;
