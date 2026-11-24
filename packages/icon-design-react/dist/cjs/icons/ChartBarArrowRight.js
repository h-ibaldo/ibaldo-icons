'use strict';

const { createElement, forwardRef } = require('react');

const ChartBarArrowRight = forwardRef(function ChartBarArrowRight(
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
    createElement('polyline', {"points":"19.016630450973025 2.000000000480213 22.016630450973025 5.000000000480213 19.016630450973025 8.000000000480213","key":"0"}),
    createElement('line', {"x1":"22.016630450973025","y1":"5.000000000480213","x2":"2.016630450973025","y2":"5.000000000480213","key":"1"}),
    createElement('rect', {"x":"2.016630450681987","y":"12.000000000480213","width":"4.000000000289219","height":"10","key":"2"}),
    createElement('rect', {"x":"10.016630450683806","y":"12.000000000480213","width":"4.000000000289219","height":"10","key":"3"}),
    createElement('rect', {"x":"18.016630450973025","y":"12.000000000480213","width":"4.000000000289219","height":"10","key":"4"})
  );
});

ChartBarArrowRight.displayName = 'ChartBarArrowRight';

module.exports = ChartBarArrowRight;
module.exports.ChartBarArrowRight = ChartBarArrowRight;
module.exports.default = ChartBarArrowRight;
