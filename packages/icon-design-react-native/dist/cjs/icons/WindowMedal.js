'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path, Polyline } = RNSvg;

const WindowMedal = forwardRef(function WindowMedal(
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
    createElement(Path, {"d":"M22.000000000184627,8.000000000448381v-4c0-1.10456949966192-.895430500338989-2-2-2H4.000000000184627c-1.104569499661011,0-2,.89543050033808-2,2v16c0,1.10456949966283.895430500338989,2,2,2h8","key":"0"}),
    createElement(Line, {"x1":"2.000000000184627","y1":"8.000000000448381","x2":"22.000000000184627","y2":"8.000000000448381","key":"1"}),
    createElement(Circle, {"cx":"18.500000000184627","cy":"14.5000000004502","r":"3.5","key":"2"}),
    createElement(Polyline, {"points":"16.000000000184627 16.944396973104631 16.000000000184627 22.000000000448381 18.500000000184627 21.000000000448381 21.000000000184627 22.000000000448381 21.000000000184627 16.944396973104631","key":"3"}),
    createElement(Line, {"x1":"5.010000000184846","y1":"5.000000000448381","x2":"5.000000000184627","y2":"5.000000000448381","key":"4"}),
    createElement(Line, {"x1":"8.010000000184846","y1":"5.000000000448381","x2":"8.000000000184627","y2":"5.000000000448381","key":"5"}),
    createElement(Line, {"x1":"11.010000000184846","y1":"5.000000000448381","x2":"11.000000000184627","y2":"5.000000000448381","key":"6"})
  );
});

WindowMedal.displayName = 'WindowMedal';

module.exports = WindowMedal;
module.exports.WindowMedal = WindowMedal;
module.exports.default = WindowMedal;
