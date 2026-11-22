'use strict';

const { createElement, forwardRef } = require('react');

const ChartGanttBare = forwardRef(function ChartGanttBare(
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
    createElement('path', {"d":"M12 12L2 12","key":"0"}),
    createElement('path', {"d":"M19 18L6.965 18","key":"1"}),
    createElement('path', {"d":"M22 6L10 6","key":"2"})
  );
});

ChartGanttBare.displayName = 'ChartGanttBare';

module.exports = ChartGanttBare;
module.exports.ChartGanttBare = ChartGanttBare;
module.exports.default = ChartGanttBare;
