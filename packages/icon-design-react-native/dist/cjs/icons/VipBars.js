'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const VipBars = forwardRef(function VipBars(
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
    createElement(Polyline, {"points":"1.999999968595148 7.997562036226554 4.999999968595148 15.997562036226554 7.999999968595148 7.997562036226554","key":"0"}),
    createElement(Line, {"x1":"16.999999968595148","y1":"7.997562036226554","x2":"16.999999968595148","y2":"15.997562036226554","key":"1"}),
    createElement(Line, {"x1":"11.999999968595148","y1":"7.997562036226554","x2":"11.999999968595148","y2":"15.997562036226554","key":"2"}),
    createElement(Path, {"d":"M16.999999968595148,7.997562036226554h3c1.104569499661011,0,2,.895430500338989,2,2v1c0,1.10456949966192-.895430500338989,2-2,2h-3","key":"3"}),
    createElement(Line, {"x1":"1.999999968586053","y1":"3.997562036226554","x2":"21.999999968586053","y2":"3.997562036226554","key":"4"}),
    createElement(Line, {"x1":"1.999999968586053","y1":"19.997562036226554","x2":"21.999999968586053","y2":"19.997562036226554","key":"5"})
  );
});

VipBars.displayName = 'VipBars';

module.exports = VipBars;
module.exports.VipBars = VipBars;
module.exports.default = VipBars;
