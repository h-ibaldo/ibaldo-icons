'use strict';

const { createElement, forwardRef } = require('react');

const ChartArea = forwardRef(function ChartArea(
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
    createElement('path', {"d":"M22 18L6 18L6 12L10 8L14 11L22 5Z","key":"1"})
  );
});

ChartArea.displayName = 'ChartArea';

module.exports = ChartArea;
module.exports.ChartArea = ChartArea;
module.exports.default = ChartArea;
