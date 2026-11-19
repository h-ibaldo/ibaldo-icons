'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const LayoutGridLabels = forwardRef(function LayoutGridLabels(
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
    createElement(Rect, {"x":"1.999999994000973","y":"1.998779299956368","width":"7","height":"5","rx":"1","ry":"1","key":"0"}),
    createElement(Line, {"x1":"1.999999994000973","y1":"9.998779299956368","x2":"8.999999994000973","y2":"9.998779299956368","key":"1"}),
    createElement(Rect, {"x":"14.999999994000973","y":"1.998779299956368","width":"7","height":"5","rx":"1","ry":"1","key":"2"}),
    createElement(Line, {"x1":"14.999999994000973","y1":"9.998779299956368","x2":"21.999999994000973","y2":"9.998779299956368","key":"3"}),
    createElement(Rect, {"x":"1.999999994000973","y":"13.99877929995273","width":"7","height":"5","rx":"1","ry":"1","key":"4"}),
    createElement(Line, {"x1":"1.999999994000973","y1":"21.998779299956368","x2":"8.999999994000973","y2":"21.998779299956368","key":"5"}),
    createElement(Rect, {"x":"14.999999994000973","y":"13.99877929995273","width":"7","height":"5","rx":"1","ry":"1","key":"6"}),
    createElement(Line, {"x1":"14.999999994000973","y1":"21.998779299956368","x2":"21.999999994000973","y2":"21.998779299956368","key":"7"})
  );
});

LayoutGridLabels.displayName = 'LayoutGridLabels';

module.exports = LayoutGridLabels;
module.exports.LayoutGridLabels = LayoutGridLabels;
module.exports.default = LayoutGridLabels;
