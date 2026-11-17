'use strict';

const { createElement, forwardRef } = require('react');

const ChartBarSquareMinus = forwardRef(function ChartBarSquareMinus(
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
    createElement('path', {"d":"M21.974731440099276,9.000000004336471v8c0,2.761423749150708-2.238576250838378,5-5,5H6.974731440099276c-2.761423749148889,0-5-2.238576250849292-5-5V7.000000004336471c0-2.761423749150708,2.238576250851111-5,5-5h6","key":"0"}),
    createElement('line', {"x1":"16.974731440099276","y1":"4.50000000442742","x2":"21.974731440010146","y2":"4.500000004336471","key":"1"}),
    createElement('rect', {"x":"5.974731440099276","y":"10.000000003885361","width":"4","height":"6","key":"2"}),
    createElement('rect', {"x":"9.974731440099276","y":"7.000000003885361","width":"4","height":"9","key":"3"}),
    createElement('rect', {"x":"13.974731440099276","y":"11.000000003885361","width":"4","height":"5","key":"4"})
  );
});

ChartBarSquareMinus.displayName = 'ChartBarSquareMinus';

module.exports = ChartBarSquareMinus;
module.exports.ChartBarSquareMinus = ChartBarSquareMinus;
module.exports.default = ChartBarSquareMinus;
