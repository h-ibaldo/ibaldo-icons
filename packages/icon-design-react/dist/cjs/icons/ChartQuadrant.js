'use strict';

const { createElement, forwardRef } = require('react');

const ChartQuadrant = forwardRef(function ChartQuadrant(
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
    createElement('path', {"d":"M12 2L12 22","key":"1"}),
    createElement('path', {"d":"M12 2L12 22","key":"2"}),
    createElement('path', {"d":"M22 12L2 12","key":"3"}),
    createElement('path', {"d":"M7 6L7 6","key":"4"}),
    createElement('path', {"d":"M18 6L18 6","key":"5"}),
    createElement('path', {"d":"M7 17L7 17","key":"6"}),
    createElement('path', {"d":"M18 17L18 17","key":"7"})
  );
});

ChartQuadrant.displayName = 'ChartQuadrant';

module.exports = ChartQuadrant;
module.exports.ChartQuadrant = ChartQuadrant;
module.exports.default = ChartQuadrant;
