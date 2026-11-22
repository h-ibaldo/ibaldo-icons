'use strict';

const { createElement, forwardRef } = require('react');

const ChartCandlestickTwo = forwardRef(function ChartCandlestickTwo(
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
    createElement('path', {"d":"M7 6L7 2","key":"0"}),
    createElement('path', {"d":"M7 22L7 18","key":"1"}),
    createElement('path', {"d":"M5 6L9 6C9.551 6 10 6.449 10 7L10 17C10 17.551 9.551 18 9 18L5 18C4.449 18 4 17.551 4 17L4 7C4 6.449 4.449 6 5 6Z","key":"2"}),
    createElement('path', {"d":"M17 8L17 4","key":"3"}),
    createElement('path', {"d":"M17 20L17 16","key":"4"}),
    createElement('path', {"d":"M15 8L19 8C19.551 8 20 8.449 20 9L20 15C20 15.551 19.551 16 19 16L15 16C14.449 16 14 15.551 14 15L14 9C14 8.449 14.449 8 15 8Z","key":"5"})
  );
});

ChartCandlestickTwo.displayName = 'ChartCandlestickTwo';

module.exports = ChartCandlestickTwo;
module.exports.ChartCandlestickTwo = ChartCandlestickTwo;
module.exports.default = ChartCandlestickTwo;
