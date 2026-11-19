'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Polyline } = RNSvg;

const TouchPinch = forwardRef(function TouchPinch(
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
    createElement(Circle, {"cx":"19.025268539633089","cy":"4.998779303641641","r":"3.000000000001137","key":"0"}),
    createElement(Polyline, {"points":"13.025268539615354 6.998780689154955 13.025268539255194 10.99877895701502 17.025266807115258 10.99877895737518","key":"1"}),
    createElement(Line, {"x1":"16.903930649006725","y1":"7.120117194266641","x2":"13.025268539635363","y2":"10.998779303641641","key":"2"}),
    createElement(Circle, {"cx":"5.025268539445733","cy":"18.998779303452466","r":"2.999999999999773","key":"3"}),
    createElement(Polyline, {"points":"11.025268539455283 16.998777917939151 11.025268539826357 12.998779650079086 7.025270271966292 12.998779649722564","key":"4"}),
    createElement(Line, {"x1":"7.146606430076645","y1":"16.877441412827466","x2":"11.025268539446188","y2":"12.998779303452466","key":"5"})
  );
});

TouchPinch.displayName = 'TouchPinch';

module.exports = TouchPinch;
module.exports.TouchPinch = TouchPinch;
module.exports.default = TouchPinch;
