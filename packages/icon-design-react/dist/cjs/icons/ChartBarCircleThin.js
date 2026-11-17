'use strict';

const { createElement, forwardRef } = require('react');

const ChartBarCircleThin = forwardRef(function ChartBarCircleThin(
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
    createElement('circle', {"cx":"12","cy":"12","r":"10","key":"0"}),
    createElement('line', {"x1":"8","y1":"15","x2":"8","y2":"12","key":"1"}),
    createElement('line', {"x1":"12","y1":"15","x2":"12","y2":"8","key":"2"}),
    createElement('line', {"x1":"16","y1":"15","x2":"16","y2":"10","key":"3"})
  );
});

ChartBarCircleThin.displayName = 'ChartBarCircleThin';

module.exports = ChartBarCircleThin;
module.exports.ChartBarCircleThin = ChartBarCircleThin;
module.exports.default = ChartBarCircleThin;
