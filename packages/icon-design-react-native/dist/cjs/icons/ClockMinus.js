'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const ClockMinus = forwardRef(function ClockMinus(
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
    createElement(Line, {"x1":"2","y1":"18.999999999887223","x2":"8","y2":"18.999999999887223","key":"0"}),
    createElement(Path, {"d":"M12,21.999999999887223c5.522827148439319,0,10-4.477172851558862,10-10,0-5.522888183590112-4.477172851560681-10-10-10S2,6.477111816297111,2,11.999999999887223c0,.685852050782159.075988769529431,1.353149414060681.207885742189319,2","key":"1"}),
    createElement(Polyline, {"points":"12 6.999999999887223 12 11.999999999887223 17 11.999999999887223","key":"2"})
  );
});

ClockMinus.displayName = 'ClockMinus';

module.exports = ClockMinus;
module.exports.ClockMinus = ClockMinus;
module.exports.default = ClockMinus;
