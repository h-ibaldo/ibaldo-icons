'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const ClockArrowRight = forwardRef(function ClockArrowRight(
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
    createElement(Line, {"x1":"2","y1":"18.999999999887223","x2":"10","y2":"18.999999999887223","key":"0"}),
    createElement(Polyline, {"points":"7 15.999999999887223 10 18.999999999887223 7 21.999999999887223","key":"1"}),
    createElement(Path, {"d":"M13,21.949523925668473c5.05322265625-.501892089840112,9-4.764282226560681,9-9.94952392578125,0-5.522827148439319-4.477172851560681-10-10-10S2,6.477172851447904,2,11.999999999887223c0,.685974121090112.076232910159888,1.353149414060681.208312988279431,2","key":"2"}),
    createElement(Polyline, {"points":"12 6.999999999887223 12 11.999999999887223 17 11.999999999887223","key":"3"})
  );
});

ClockArrowRight.displayName = 'ClockArrowRight';

module.exports = ClockArrowRight;
module.exports.ClockArrowRight = ClockArrowRight;
module.exports.default = ClockArrowRight;
