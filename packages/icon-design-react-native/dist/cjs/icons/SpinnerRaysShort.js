'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line } = RNSvg;

const SpinnerRaysShort = forwardRef(function SpinnerRaysShort(
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
    createElement(Line, {"x1":"11.949462885142566","y1":"2.000000000480213","x2":"11.949462885142566","y2":"4.000000000480213","key":"0"}),
    createElement(Line, {"x1":"11.949462885142566","y1":"20.000000000480213","x2":"11.949462885142566","y2":"22.000000000480213","key":"1"}),
    createElement(Line, {"x1":"1.949462885144385","y1":"12.000000000029104","x2":"3.949462885142566","y2":"12.000000000120053","key":"2"}),
    createElement(Line, {"x1":"19.949462885142566","y1":"12.000000000836735","x2":"21.949462885142566","y2":"12.000000000927685","key":"3"}),
    createElement(Line, {"x1":"19.020530696848255","y1":"4.928932188457111","x2":"17.606317134508572","y2":"6.343145750859549","key":"4"}),
    createElement(Line, {"x1":"6.292608635778379","y1":"17.65685425009724","x2":"4.878395073435968","y2":"19.071067812503316","key":"5"}),
    createElement(Line, {"x1":"4.878395073439606","y1":"4.928932188453473","x2":"6.292608635779288","y2":"6.343145750859549","key":"6"}),
    createElement(Line, {"x1":"17.60631713451312","y1":"17.65685425009724","x2":"19.020530696852802","y2":"19.071067812503316","key":"7"})
  );
});

SpinnerRaysShort.displayName = 'SpinnerRaysShort';

module.exports = SpinnerRaysShort;
module.exports.SpinnerRaysShort = SpinnerRaysShort;
module.exports.default = SpinnerRaysShort;
