'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const LaptopPulse = forwardRef(function LaptopPulse(
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
    createElement(Line, {"x1":"1.999999990599463","y1":"21.000000005169568","x2":"21.999999990599463","y2":"21.000000005169568","key":"0"}),
    createElement(Path, {"d":"M19.999999990599463,13.000000005169568v2c0,1.104569499661011-.895430500329894,2-2,2H5.999999990599463c-1.104569499659192,0-2-.895430500338989-2-2v-2","key":"1"}),
    createElement(Path, {"d":"M3.999999990420292,7.000000004987669l.00000000017917-2c.000000000100044-1.104569499661011.895430500529983-1.999999999919964,2.00000000018008-1.999999999818101l12,.000000001076842c1.104569499661011.000000000098225,1.999999999919964.89543050051725,1.99999999981992,2.000000000178261l-.00000000017917,2","key":"2"}),
    createElement(Polyline, {"points":"19.999999990599463 10.00000000588625 15.999999990599463 10.00000000552609 13.999999990340257 13.000000005347829 9.999999990870492 7.000000004987669 7.999999990599463 10.000000004809408 3.999999990599463 10.000000004449248","key":"3"})
  );
});

LaptopPulse.displayName = 'LaptopPulse';

module.exports = LaptopPulse;
module.exports.LaptopPulse = LaptopPulse;
module.exports.default = LaptopPulse;
