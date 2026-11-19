'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path, Rect } = RNSvg;

const LockOpenKeyhole = forwardRef(function LockOpenKeyhole(
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
    createElement(Rect, {"x":"3.949462885139837","y":"10.000000000480213","width":"16","height":"12","rx":"1","ry":"1","key":"0"}),
    createElement(Path, {"d":"M16.527343744520294,5.000000000480213c-.772216796880457-1.764404296875-2.528686523440228-3-4.577880859380457-3-2.761474609369543,0-5,2.23858642578125-5,5v3","key":"1"}),
    createElement(Line, {"x1":"11.949462885139837","y1":"18.000000000480213","x2":"11.949462885139837","y2":"16.000000000480213","key":"2"}),
    createElement(Circle, {"cx":"11.949462885139837","cy":"15.000000000480213","r":"1","key":"3"})
  );
});

LockOpenKeyhole.displayName = 'LockOpenKeyhole';

module.exports = LockOpenKeyhole;
module.exports.LockOpenKeyhole = LockOpenKeyhole;
module.exports.default = LockOpenKeyhole;
