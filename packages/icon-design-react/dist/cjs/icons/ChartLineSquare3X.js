'use strict';

const { createElement, forwardRef } = require('react');

const ChartLineSquare3X = forwardRef(function ChartLineSquare3X(
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
    createElement('path', {"d":"M21.949462885141656,11.000000000927685v6c0,2.761423749150708-2.238576250847473,5-5,5H6.949462885141656c-2.761423749149799,0-5-2.238576250849292-5-5V7.000000000927685c0-2.76142374914707,2.238576250850201-5,5-5h6","key":"0"}),
    createElement('line', {"x1":"17.949462885141656","y1":"6.000000000927685","x2":"21.949462885141656","y2":"2.000000000927685","key":"1"}),
    createElement('line', {"x1":"21.949462885230787","y1":"6.000000000840373","x2":"17.949462885050707","y2":"2.000000001018634","key":"2"}),
    createElement('polyline', {"points":"6.949462885141656 12.000000000927685 9.949462885141656 16.000000000927685 13.949462885141656 8.000000000927685 16.949462885141656 12.000000000927685","key":"3"})
  );
});

ChartLineSquare3X.displayName = 'ChartLineSquare3X';

module.exports = ChartLineSquare3X;
module.exports.ChartLineSquare3X = ChartLineSquare3X;
module.exports.default = ChartLineSquare3X;
