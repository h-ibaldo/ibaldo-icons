'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const ChecklistCircleEmpty = forwardRef(function ChecklistCircleEmpty(
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
    createElement(Line, {"x1":"9.974731440139294","y1":"4.000000003885361","x2":"21.974731440139294","y2":"4.000000003885361","key":"0"}),
    createElement(Line, {"x1":"9.974731440139294","y1":"12.000000003885361","x2":"21.974731440139294","y2":"12.000000003885361","key":"1"}),
    createElement(Line, {"x1":"9.974731440139294","y1":"20.000000003885361","x2":"21.974731440139294","y2":"20.000000003885361","key":"2"}),
    createElement(Rect, {"x":"1.974731463921216","y":"1.999999993864349","width":"3.999999952362487","height":"3.999999991711264","rx":"1.999997965745429","ry":"1.999997965745429","key":"3"}),
    createElement(Rect, {"x":"1.974731463920762","y":"9.999999982618931","width":"3.999999952362487","height":"4.000000013993374","rx":"1.99999798165154","ry":"1.99999798165154","key":"4"}),
    createElement(Rect, {"x":"1.974731463920762","y":"17.999999991233636","width":"3.999999952362487","height":"3.999999996763961","rx":"1.999997978159084","ry":"1.999997978159084","key":"5"})
  );
});

ChecklistCircleEmpty.displayName = 'ChecklistCircleEmpty';

module.exports = ChecklistCircleEmpty;
module.exports.ChecklistCircleEmpty = ChecklistCircleEmpty;
module.exports.default = ChecklistCircleEmpty;
