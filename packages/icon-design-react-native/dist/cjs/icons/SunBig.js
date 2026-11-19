'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const SunBig = forwardRef(function SunBig(
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
    createElement(Circle, {"cx":"12","cy":"12.000000005924448","r":"5","key":"0"}),
    createElement(Line, {"x1":"12","y1":"2.000000005924448","x2":"12","y2":"4.000000005924448","key":"1"}),
    createElement(Line, {"x1":"12","y1":"20.000000005924448","x2":"12","y2":"22.000000005924448","key":"2"}),
    createElement(Line, {"x1":"22","y1":"12.000000005924448","x2":"20","y2":"12.000000005924448","key":"3"}),
    createElement(Line, {"x1":"4","y1":"12.000000005924448","x2":"2","y2":"12.000000005924448","key":"4"}),
    createElement(Line, {"x1":"19.071067811710236","y1":"4.928932193895889","x2":"17.656854249360549","y2":"6.343145756305603","key":"5"}),
    createElement(Line, {"x1":"6.343145750630356","y1":"17.656854255545113","x2":"4.928932188289764","y2":"19.071067817945732","key":"6"}),
    createElement(Line, {"x1":"19.071067812019464","y1":"19.071067817634685","x2":"17.656854249620665","y2":"17.656854255284998","key":"7"}),
    createElement(Line, {"x1":"6.343145750379335","y1":"6.343145756563899","x2":"4.928932187980536","y2":"4.928932194216031","key":"8"})
  );
});

SunBig.displayName = 'SunBig';

module.exports = SunBig;
module.exports.SunBig = SunBig;
module.exports.default = SunBig;
