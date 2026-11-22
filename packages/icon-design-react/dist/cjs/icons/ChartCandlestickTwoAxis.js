'use strict';

const { createElement, forwardRef } = require('react');

const ChartCandlestickTwoAxis = forwardRef(function ChartCandlestickTwoAxis(
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
    createElement('path', {"d":"M2 2L2 22L22.023 22","key":"0"}),
    createElement('path', {"d":"M7 6L11 6L11 14L7 14Z","key":"1"}),
    createElement('path', {"d":"M15 10L19 10L19 15L15 15Z","key":"2"}),
    createElement('path', {"d":"M17 7L17 10","key":"3"}),
    createElement('path', {"d":"M9 3L9 6","key":"4"}),
    createElement('path', {"d":"M9 14L9 17","key":"5"}),
    createElement('path', {"d":"M17 15L17 18","key":"6"})
  );
});

ChartCandlestickTwoAxis.displayName = 'ChartCandlestickTwoAxis';

module.exports = ChartCandlestickTwoAxis;
module.exports.ChartCandlestickTwoAxis = ChartCandlestickTwoAxis;
module.exports.default = ChartCandlestickTwoAxis;
