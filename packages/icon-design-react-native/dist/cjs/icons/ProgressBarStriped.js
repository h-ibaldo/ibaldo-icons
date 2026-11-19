'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const ProgressBarStriped = forwardRef(function ProgressBarStriped(
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
    createElement(Rect, {"x":"1.974731449501633","y":"8.000000000480213","width":"20","height":"8","rx":"2","ry":"2","key":"0"}),
    createElement(Line, {"x1":"2.974731449501633","y1":"15.000000000480213","x2":"9.974731449501633","y2":"8.000000000480213","key":"1"}),
    createElement(Line, {"x1":"1.974731449501633","y1":"12.000000000480213","x2":"5.974731449501633","y2":"8.000000000480213","key":"2"}),
    createElement(Line, {"x1":"5.974731449501633","y1":"16.000000000480213","x2":"13.974731449501633","y2":"8.000000000480213","key":"3"}),
    createElement(Line, {"x1":"9.974731449501633","y1":"16.000000000480213","x2":"13.974731449501633","y2":"12.000000000480213","key":"4"}),
    createElement(Line, {"x1":"13.974731449501633","y1":"8.000000000480213","x2":"13.974731449501633","y2":"16.000000000480213","key":"5"})
  );
});

ProgressBarStriped.displayName = 'ProgressBarStriped';

module.exports = ProgressBarStriped;
module.exports.ProgressBarStriped = ProgressBarStriped;
module.exports.default = ProgressBarStriped;
