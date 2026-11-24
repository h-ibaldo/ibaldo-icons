'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Rect } = RNSvg;

const AtMinusTall = forwardRef(function AtMinusTall(
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
    createElement(Rect, {"x":"10.474727811215814","y":"7.000000000250623","width":"5.999999906583184","height":"9.999999999999659","rx":"2.999996946189291","ry":"2.999996946189291","key":"0"}),
    createElement(Line, {"x1":"18.474731450040053","y1":"22.000000000478394","x2":"13.474731450040053","y2":"22.000000000479304","key":"1"}),
    createElement(Path, {"d":"M16.474731450040053,14.000000000478394v1c0,1.10456949966192.895430500339899,2,2,2h1c1.104569499660101,0,2-.89543050033808,2-2v-1","key":"2"}),
    createElement(Line, {"x1":"7.974731450040053","y1":"5.00000000046839","x2":"1.974731450040053","y2":"5.00000000046839","key":"3"}),
    createElement(Path, {"d":"M21.474731450040053,14.00000000046839v-4c0-4.41827392578125-3.581726074220569-8-8-8-.693054199220569,0-1.3603515625.09967041015625-2,.26824951171875","key":"4"}),
    createElement(Path, {"d":"M5.474731450040053,10.00000000046839v4c0,4.41827392578125,3.581726074219659,8,8,8","key":"5"})
  );
});

AtMinusTall.displayName = 'AtMinusTall';

module.exports = AtMinusTall;
module.exports.AtMinusTall = AtMinusTall;
module.exports.default = AtMinusTall;
