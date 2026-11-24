'use strict';

const { createElement, forwardRef } = require('react');

const ChartGantt = forwardRef(function ChartGantt(
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
    createElement('path', {"d":"M12.965 12L7 12","key":"1"}),
    createElement('path', {"d":"M16.965 16L11 16","key":"2"}),
    createElement('path', {"d":"M20.965 8L11 8","key":"3"})
  );
});

ChartGantt.displayName = 'ChartGantt';

module.exports = ChartGantt;
module.exports.ChartGantt = ChartGantt;
module.exports.default = ChartGantt;
