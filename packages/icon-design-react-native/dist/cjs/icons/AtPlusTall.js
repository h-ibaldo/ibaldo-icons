'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Rect } = RNSvg;

const AtPlusTall = forwardRef(function AtPlusTall(
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
    createElement(Rect, {"x":"10.474727789446149","y":"7.000000000250623","width":"5.999999950122515","height":"9.999999999999659","rx":"2.999996961486414","ry":"2.999996961486414","key":"0"}),
    createElement(Line, {"x1":"18.474731450040053","y1":"22.000000000478394","x2":"13.474731450040053","y2":"22.000000000479304","key":"1"}),
    createElement(Path, {"d":"M5.474731450040053,12.00000000046839v2.000008000009984c0,4.418273580367895,3.581718419629397,7.99999200000002,7.99999200000002,7.99999200000002h.00001599999996","key":"2"}),
    createElement(Path, {"d":"M21.474731450040053,14.000008000478374v-4.00001599999996c0-4.418273580366986-3.581718419630306-7.99999200000002-7.99999200000002-7.99999200000002","key":"3"}),
    createElement(Path, {"d":"M16.474731450040053,14.000000000478394v1c0,1.10456949966192.895430500339899,2,2,2h1c1.104569499660101,0,2-.89543050033808,2-2v-1","key":"4"}),
    createElement(Line, {"x1":"4.974731450040053","y1":"2.00000000046839","x2":"4.974731450040053","y2":"8.00000000046839","key":"5"}),
    createElement(Line, {"x1":"7.974731450040053","y1":"5.00000000046839","x2":"1.974731450040053","y2":"5.00000000046839","key":"6"}),
    createElement(Path, {"d":"M13.474731450070067,2.000000000448381c-.692321777340112,0-1.359924316399884.097900390625-2,.2646484375","key":"7"})
  );
});

AtPlusTall.displayName = 'AtPlusTall';

module.exports = AtPlusTall;
module.exports.AtPlusTall = AtPlusTall;
module.exports.default = AtPlusTall;
