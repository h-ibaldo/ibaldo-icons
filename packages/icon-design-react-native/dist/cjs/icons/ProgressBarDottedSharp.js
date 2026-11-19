'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const ProgressBarDottedSharp = forwardRef(function ProgressBarDottedSharp(
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
    createElement(Line, {"x1":"2.984731449512765","y1":"11.000000000480213","x2":"2.974731449512547","y2":"11.000000000480213","key":"0"}),
    createElement(Line, {"x1":"5.984731449512765","y1":"11.000000000480213","x2":"5.974731449512547","y2":"11.000000000480213","key":"1"}),
    createElement(Line, {"x1":"8.984731449512765","y1":"11.000000000480213","x2":"8.974731449512547","y2":"11.000000000480213","key":"2"}),
    createElement(Line, {"x1":"11.984731449512765","y1":"11.000000000480213","x2":"11.974731449512547","y2":"11.000000000480213","key":"3"}),
    createElement(Line, {"x1":"13.974731449501633","y1":"15.000000000480213","x2":"13.974731449501633","y2":"9.000000000480213","key":"4"}),
    createElement(Line, {"x1":"4.984731449512765","y1":"13.000000000480213","x2":"4.974731449512547","y2":"13.000000000480213","key":"5"}),
    createElement(Line, {"x1":"7.984731449512765","y1":"13.000000000480213","x2":"7.974731449512547","y2":"13.000000000480213","key":"6"}),
    createElement(Line, {"x1":"10.984731449512765","y1":"13.000000000480213","x2":"10.974731449512547","y2":"13.000000000480213","key":"7"}),
    createElement(Rect, {"x":"1.974731449501633","y":"8.999999993041456","width":"20","height":"6.000000014876605","key":"8"})
  );
});

ProgressBarDottedSharp.displayName = 'ProgressBarDottedSharp';

module.exports = ProgressBarDottedSharp;
module.exports.ProgressBarDottedSharp = ProgressBarDottedSharp;
module.exports.default = ProgressBarDottedSharp;
