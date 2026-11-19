'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polygon, Rect } = RNSvg;

const WindowPlayCenterPlain = forwardRef(function WindowPlayCenterPlain(
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
    createElement(Rect, {"x":"1.999999993631718","y":"1.998779299956368","width":"20","height":"20","rx":"3","ry":"3","key":"0"}),
    createElement(Line, {"x1":"1.999999993631718","y1":"7.998779299956368","x2":"21.999999993631718","y2":"7.998779299956368","key":"1"}),
    createElement(Polygon, {"points":"9.999999993642632 11.998779299956368 9.999999993642632 17.998779299956368 14.999999993642632 14.998779299956368 9.999999993642632 11.998779299956368","key":"2"})
  );
});

WindowPlayCenterPlain.displayName = 'WindowPlayCenterPlain';

module.exports = WindowPlayCenterPlain;
module.exports.WindowPlayCenterPlain = WindowPlayCenterPlain;
module.exports.default = WindowPlayCenterPlain;
