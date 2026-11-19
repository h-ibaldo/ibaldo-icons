'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline } = RNSvg;

const TabArrowLeftXStep = forwardRef(function TabArrowLeftXStep(
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
    createElement(Polyline, {"points":"13.149805218625261 21.997565477288845 2.050537104505565 21.997565477288845 2.050537104505565 1.997565477288845 11.050537104505565 1.997565477288845 11.050537104505565 5.997565477288845 22.050537104505565 5.997565477288845 22.050537104505565 12.997565477288845","key":"0"}),
    createElement(Line, {"x1":"22.050537104505565","y1":"1.997565477288845","x2":"15.050537104505565","y2":"1.997565477288845","key":"1"}),
    createElement(Line, {"x1":"17.050537104505565","y1":"16.997565477288845","x2":"22.050537104505565","y2":"21.997565477288845","key":"2"}),
    createElement(Line, {"x1":"22.050537104505565","y1":"16.997565477288845","x2":"17.050537104505565","y2":"21.997565477288845","key":"3"}),
    createElement(Line, {"x1":"14.050537104505565","y1":"13.997565477288845","x2":"7.050537104505565","y2":"13.997565477288845","key":"4"}),
    createElement(Polyline, {"points":"10.050537104505565 10.997565477288845 7.050537104505565 13.997565477288845 10.050537104505565 16.997565477288845","key":"5"})
  );
});

TabArrowLeftXStep.displayName = 'TabArrowLeftXStep';

module.exports = TabArrowLeftXStep;
module.exports.TabArrowLeftXStep = TabArrowLeftXStep;
module.exports.default = TabArrowLeftXStep;
