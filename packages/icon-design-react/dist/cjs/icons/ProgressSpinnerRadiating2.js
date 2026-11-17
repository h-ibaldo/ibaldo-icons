'use strict';

const { createElement, forwardRef } = require('react');

const ProgressSpinnerRadiating2 = forwardRef(function ProgressSpinnerRadiating2(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('line', {"x1":"11.949462885142566","y1":"2.000000000480213","x2":"11.949462885142566","y2":"6.000000000480213","key":"0"}),
    createElement('line', {"x1":"11.949462885142566","y1":"18.000000000480213","x2":"11.949462885142566","y2":"22.000000000480213","key":"1"}),
    createElement('line', {"x1":"21.949462885140747","y1":"12.000000000480213","x2":"17.949462885142566","y2":"12.000000000480213","key":"2"}),
    createElement('line', {"x1":"5.949462885142566","y1":"12.000000000480213","x2":"1.949462885142566","y2":"12.000000000480213","key":"3"}),
    createElement('line', {"x1":"4.878395073435968","y1":"4.928932188453473","x2":"7.706822198118061","y2":"7.757359313261986","key":"4"}),
    createElement('line', {"x1":"16.192103572164342","y1":"16.242640687691164","x2":"19.020530696848255","y2":"19.071067812503316","key":"5"}),
    createElement('line', {"x1":"19.020530697166578","y1":"4.928932188773615","x2":"16.192103572358064","y2":"7.757359313454799","key":"6"}),
    createElement('line', {"x1":"7.706822197927977","y1":"16.242640687501989","x2":"4.878395073115826","y2":"19.071067812183173","key":"7"})
  );
});

ProgressSpinnerRadiating2.displayName = 'ProgressSpinnerRadiating2';

module.exports = ProgressSpinnerRadiating2;
module.exports.ProgressSpinnerRadiating2 = ProgressSpinnerRadiating2;
module.exports.default = ProgressSpinnerRadiating2;
