'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline, Rect } = RNSvg;

const WindowCheckCenterPlain = forwardRef(function WindowCheckCenterPlain(
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
    createElement(Polyline, {"points":"14.999999993642632 12.998779299956368 10.999999993642632 16.998779299956368 8.999999993642632 14.998779299956368","key":"0"}),
    createElement(Rect, {"x":"1.999999993642632","y":"1.998779299956368","width":"20","height":"20","rx":"3","ry":"3","key":"1"}),
    createElement(Line, {"x1":"1.999999993642632","y1":"7.998779299956368","x2":"21.999999993642632","y2":"7.998779299956368","key":"2"})
  );
});

WindowCheckCenterPlain.displayName = 'WindowCheckCenterPlain';

module.exports = WindowCheckCenterPlain;
module.exports.WindowCheckCenterPlain = WindowCheckCenterPlain;
module.exports.default = WindowCheckCenterPlain;
