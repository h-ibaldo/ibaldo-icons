'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Polyline } = RNSvg;

const ClockCheck = forwardRef(function ClockCheck(
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
    createElement(Polyline, {"points":"2 19.999999999887223 4 21.999999999887223 8 17.999999999887223","key":"0"}),
    createElement(Path, {"d":"M10,21.792114257697904c.646850585939319.131896972659888,1.314147949220569.207885742189319,2,.207885742189319,5.522827148439319,0,10-4.477172851558862,10-10,0-5.522888183590112-4.477172851560681-10-10-10S2,6.477111816297111,2,11.999999999887223c0,1.425720214840112.31103515625,2.774047851560681.850830078119543,4","key":"1"}),
    createElement(Polyline, {"points":"12 6.999999999887223 12 11.999999999887223 17 11.999999999887223","key":"2"})
  );
});

ClockCheck.displayName = 'ClockCheck';

module.exports = ClockCheck;
module.exports.ClockCheck = ClockCheck;
module.exports.default = ClockCheck;
