'use strict';

const { createElement, forwardRef } = require('react');

const ChartBarPeak = forwardRef(function ChartBarPeak(
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
    createElement('rect', {"x":"2","y":"13","width":"4","height":"8","key":"0"}),
    createElement('rect', {"x":"10","y":"3","width":"4","height":"18","key":"1"}),
    createElement('rect', {"x":"18","y":"8","width":"4","height":"13","key":"2"})
  );
});

ChartBarPeak.displayName = 'ChartBarPeak';

module.exports = ChartBarPeak;
module.exports.ChartBarPeak = ChartBarPeak;
module.exports.default = ChartBarPeak;
