'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polygon } = RNSvg;

const KeypadGrid = forwardRef(function KeypadGrid(
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
    createElement(Line, {"x1":"2.974731449503452","y1":"7.000000000480213","x2":"20.974731449503452","y2":"7.000000000480213","key":"0"}),
    createElement(Line, {"x1":"2.974731449503452","y1":"12.000000000480213","x2":"20.974731449503452","y2":"12.000000000480213","key":"1"}),
    createElement(Line, {"x1":"8.974731449503452","y1":"17.000000000480213","x2":"14.974731449503452","y2":"17.000000000480213","key":"2"}),
    createElement(Line, {"x1":"14.974731449503452","y1":"2.000000000479304","x2":"14.974731449503452","y2":"17.000000000480213","key":"3"}),
    createElement(Line, {"x1":"8.974731449503452","y1":"2.000000000479304","x2":"8.974731449503452","y2":"17.000000000480213","key":"4"}),
    createElement(Polygon, {"points":"20.974731449503452 2.000000000479304 2.974731449503452 2.000000000479304 2.974731449503452 17.000000000480213 8.974731449503452 17.000000000480213 8.974731449503452 22.000000000480213 14.974731449503452 22.000000000480213 14.974731449503452 17.000000000480213 20.974731449503452 17.000000000480213 20.974731449503452 2.000000000479304","key":"5"})
  );
});

KeypadGrid.displayName = 'KeypadGrid';

module.exports = KeypadGrid;
module.exports.KeypadGrid = KeypadGrid;
module.exports.default = KeypadGrid;
