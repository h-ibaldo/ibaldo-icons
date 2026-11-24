'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const SunShortLarge = forwardRef(function SunShortLarge(
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
    createElement(Circle, {"cx":"11.999999990796823","cy":"12.000000000448381","r":"6","key":"0"}),
    createElement(Line, {"x1":"11.999999990796823","y1":"2.000000000448381","x2":"11.999999990796823","y2":"3.000000000448381","key":"1"}),
    createElement(Line, {"x1":"11.999999990796823","y1":"21.000000000448381","x2":"11.999999990796823","y2":"22.000000000448381","key":"2"}),
    createElement(Line, {"x1":"21.999999990796823","y1":"12.000000000448381","x2":"20.999999990796823","y2":"12.000000000448381","key":"3"}),
    createElement(Line, {"x1":"2.999999990796823","y1":"12.000000000448381","x2":"1.999999990796823","y2":"12.000000000448381","key":"4"}),
    createElement(Line, {"x1":"19.071067802503421","y1":"4.92893218842255","x2":"18.363961021333125","y2":"5.636038969624678","key":"5"}),
    createElement(Line, {"x1":"5.63603896026143","y1":"18.363961031267536","x2":"4.928932179090225","y2":"19.071067812470574","key":"6"}),
    createElement(Line, {"x1":"19.071067802821744","y1":"19.071067812154979","x2":"18.363961021618707","y2":"18.363961030984683","key":"7"}),
    createElement(Line, {"x1":"5.636038959976759","y1":"5.636038969912988","x2":"4.928932178773721","y2":"4.928932188741783","key":"8"})
  );
});

SunShortLarge.displayName = 'SunShortLarge';

module.exports = SunShortLarge;
module.exports.SunShortLarge = SunShortLarge;
module.exports.default = SunShortLarge;
