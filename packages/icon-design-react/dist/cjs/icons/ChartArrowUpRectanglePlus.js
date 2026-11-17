'use strict';

const { createElement, forwardRef } = require('react');

const ChartArrowUpRectanglePlus = forwardRef(function ChartArrowUpRectanglePlus(
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
    createElement('path', {"d":"M21.949462885142566,11.000000000480213v6c0,2.761423749150708-2.238576250850201,5-5,5H6.949462885142566c-2.761423749149799,0-5-2.238576250849292-5-5V7.000000000480213c0-2.761423749150708,2.238576250850201-5,5-5h6","key":"0"}),
    createElement('line', {"x1":"19.449462885142566","y1":"7.000000000480213","x2":"19.449462885053435","y2":"2.000000000571163","key":"1"}),
    createElement('line', {"x1":"16.949462885142566","y1":"4.500000000571163","x2":"21.949462885053435","y2":"4.500000000480213","key":"2"}),
    createElement('polyline', {"points":"6.949462885142566 16.000000000480213 9.949462885142566 13.000000000480213 11.949462885142566 15.000000000480213 16.949462885142566 10.000000000480213","key":"3"}),
    createElement('polyline', {"points":"16.949462885142566 13.000000000480213 16.949462885142566 10.000000000480213 13.949462885142566 10.000000000480213","key":"4"})
  );
});

ChartArrowUpRectanglePlus.displayName = 'ChartArrowUpRectanglePlus';

module.exports = ChartArrowUpRectanglePlus;
module.exports.ChartArrowUpRectanglePlus = ChartArrowUpRectanglePlus;
module.exports.default = ChartArrowUpRectanglePlus;
