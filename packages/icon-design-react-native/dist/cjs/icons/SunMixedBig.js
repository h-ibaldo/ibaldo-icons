'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const SunMixedBig = forwardRef(function SunMixedBig(
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
    createElement(Circle, {"cx":"12","cy":"12.000000007900326","r":"4.999999999999773","key":"0"}),
    createElement(Line, {"x1":"12.00000000044929","y1":"2.000000007899871","x2":"12.000000000358341","y2":"4.000000007899871","key":"1"}),
    createElement(Line, {"x1":"11.999999999641659","y1":"20.000000007899871","x2":"11.99999999955071","y2":"22.000000007899871","key":"2"}),
    createElement(Line, {"x1":"22","y1":"12.000000008349161","x2":"20","y2":"12.000000008260031","key":"3"}),
    createElement(Line, {"x1":"4","y1":"12.00000000754153","x2":"2","y2":"12.000000007450581","key":"4"}),
    createElement(Line, {"x1":"4.92893218829704","y1":"4.928932195873131","x2":"8.464466094149429","y2":"8.464466101891958","key":"5"}),
    createElement(Line, {"x1":"15.535533905850571","y1":"15.535533913907784","x2":"19.07106781170296","y2":"19.07106781992843","key":"6"}),
    createElement(Line, {"x1":"19.071067811708417","y1":"4.928932195878588","x2":"15.535533905849661","y2":"8.46446610188832","key":"7"}),
    createElement(Line, {"x1":"8.464466094141244","y1":"15.535533913911422","x2":"4.928932188291583","y2":"19.071067819922973","key":"8"})
  );
});

SunMixedBig.displayName = 'SunMixedBig';

module.exports = SunMixedBig;
module.exports.SunMixedBig = SunMixedBig;
module.exports.default = SunMixedBig;
