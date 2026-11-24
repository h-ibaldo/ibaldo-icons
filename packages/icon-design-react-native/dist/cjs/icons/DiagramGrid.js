'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const DiagramGrid = forwardRef(function DiagramGrid(
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
    createElement(Rect, {"x":"1.949462885142566","y":"15.000000000480213","width":"7","height":"7","key":"0"}),
    createElement(Rect, {"x":"14.949462885142566","y":"15.000000000480213","width":"7","height":"7","key":"1"}),
    createElement(Rect, {"x":"1.949462885142566","y":"2.000000000480213","width":"7","height":"7","key":"2"}),
    createElement(Rect, {"x":"14.949462885142566","y":"2.000000000480213","width":"7","height":"7","key":"3"}),
    createElement(Line, {"x1":"1.949462885142566","y1":"17.000000000480213","x2":"6.949462885142566","y2":"22.000000000480213","key":"4"}),
    createElement(Line, {"x1":"3.949462885142566","y1":"15.000000000480213","x2":"8.949462885142566","y2":"20.000000000480213","key":"5"}),
    createElement(Line, {"x1":"8.949462885142566","y1":"5.500000000480213","x2":"14.949462885142566","y2":"5.500000000480213","key":"6"}),
    createElement(Line, {"x1":"8.949462885142566","y1":"18.500000000480213","x2":"14.949462885142566","y2":"18.500000000480213","key":"7"}),
    createElement(Line, {"x1":"18.449462885142566","y1":"9.000000000480213","x2":"18.449462885142566","y2":"15.000000000480213","key":"8"}),
    createElement(Line, {"x1":"5.449462885142566","y1":"9.000000000480213","x2":"5.449462885142566","y2":"15.000000000480213","key":"9"})
  );
});

DiagramGrid.displayName = 'DiagramGrid';

module.exports = DiagramGrid;
module.exports.DiagramGrid = DiagramGrid;
module.exports.default = DiagramGrid;
