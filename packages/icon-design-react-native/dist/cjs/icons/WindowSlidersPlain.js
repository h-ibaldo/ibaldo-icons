'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const WindowSlidersPlain = forwardRef(function WindowSlidersPlain(
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
    createElement(Rect, {"x":"1.999999993990059","y":"1.998779299956368","width":"20","height":"20","rx":"2","ry":"2","key":"0"}),
    createElement(Line, {"x1":"1.999999993990059","y1":"7.998779299956368","x2":"21.999999993990059","y2":"7.998779299956368","key":"1"}),
    createElement(Line, {"x1":"6.999999994000973","y1":"11.998779299956368","x2":"6.999999994000973","y2":"17.998779299956368","key":"2"}),
    createElement(Line, {"x1":"11.999999994000973","y1":"11.998779299956368","x2":"11.999999994000973","y2":"17.998779299956368","key":"3"}),
    createElement(Line, {"x1":"16.999999994000973","y1":"11.998779299956368","x2":"16.999999994000973","y2":"17.998779299956368","key":"4"}),
    createElement(Line, {"x1":"5.999999994000973","y1":"13.998779299956368","x2":"7.999999994000973","y2":"13.998779299956368","key":"5"}),
    createElement(Line, {"x1":"10.999999994000973","y1":"15.998779299956368","x2":"12.999999994000973","y2":"15.998779299956368","key":"6"}),
    createElement(Line, {"x1":"15.999999993640813","y1":"13.998779299956368","x2":"17.999999993640813","y2":"13.998779299956368","key":"7"})
  );
});

WindowSlidersPlain.displayName = 'WindowSlidersPlain';

module.exports = WindowSlidersPlain;
module.exports.WindowSlidersPlain = WindowSlidersPlain;
module.exports.default = WindowSlidersPlain;
