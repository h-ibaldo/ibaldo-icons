'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const WindowCloud2 = forwardRef(function WindowCloud2(
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
    createElement(Path, {"d":"M6.000000000184627,22.000000000448381h-2c-1.10456949966192,0-2-.895430500338989-2-2V4.000000000448381c0-1.10456949966192.89543050033808-2,2-2h16c1.10456949966192,0,2,.89543050033808,2,2v9","key":"0"}),
    createElement(Line, {"x1":"2.000000000184627","y1":"8.000000000448381","x2":"22.000000000184627","y2":"8.000000000448381","key":"1"}),
    createElement(Path, {"d":"M19.000000000184627,16.000000000448381h-.050415039060681c-.244506835939319-1.69403076171875-1.687866210939319-3-3.449584960939319-3-1.932983398435681,0-3.5,1.567016601563409-3.5,3.5v.5h-.5c-1.380737304685681,0-2.5,1.119262695313409-2.5,2.5,0,1.380737304688409,1.119262695314319,2.5,2.5,2.5h7.5c1.656860351564319,0,3-1.343139648436591,3-3,0-1.656860351561591-1.343139648435681-3-3-3Z","key":"2"}),
    createElement(Line, {"x1":"5.010000000184846","y1":"5.000000000448381","x2":"5.000000000184627","y2":"5.000000000448381","key":"3"}),
    createElement(Line, {"x1":"8.010000000184846","y1":"5.000000000448381","x2":"8.000000000184627","y2":"5.000000000448381","key":"4"}),
    createElement(Line, {"x1":"11.010000000184846","y1":"5.000000000448381","x2":"11.000000000184627","y2":"5.000000000448381","key":"5"})
  );
});

WindowCloud2.displayName = 'WindowCloud2';

module.exports = WindowCloud2;
module.exports.WindowCloud2 = WindowCloud2;
module.exports.default = WindowCloud2;
