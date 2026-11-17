'use strict';

const { createElement, forwardRef } = require('react');

const SpinnerRaysLong = forwardRef(function SpinnerRaysLong(
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
    createElement('line', {"x1":"11.949462885142566","y1":"2.000000000480213","x2":"11.949462885142566","y2":"7.000000000480213","key":"0"}),
    createElement('line', {"x1":"11.949462885142566","y1":"17.000000000480213","x2":"11.949462885142566","y2":"22.000000000480213","key":"1"}),
    createElement('line', {"x1":"21.949462885140747","y1":"12.000000000480213","x2":"16.949462885140747","y2":"12.000000000480213","key":"2"}),
    createElement('line', {"x1":"6.949462885142566","y1":"12.000000000480213","x2":"1.949462885142566","y2":"12.000000000480213","key":"3"}),
    createElement('line', {"x1":"19.020530696847345","y1":"4.928932188457111","x2":"15.484996790994956","y2":"8.464466094468662","key":"4"}),
    createElement('line', {"x1":"8.413928979287448","y1":"15.535533906491764","x2":"4.878395073435968","y2":"19.071067812503316","key":"5"}),
    createElement('line', {"x1":"19.020530697163849","y1":"19.071067812186811","x2":"15.484996791151389","y2":"15.535533906331693","key":"6"}),
    createElement('line', {"x1":"8.413928979129196","y1":"8.464466094628733","x2":"4.878395073115826","y2":"4.928932188773615","key":"7"})
  );
});

SpinnerRaysLong.displayName = 'SpinnerRaysLong';

module.exports = SpinnerRaysLong;
module.exports.SpinnerRaysLong = SpinnerRaysLong;
module.exports.default = SpinnerRaysLong;
