'use strict';

const { createElement, forwardRef } = require('react');

const ChartBarSquareX = forwardRef(function ChartBarSquareX(
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
    createElement('path', {"d":"M21.974731440099276,11.000000004336471v6c0,2.761423749150708-2.238576250838378,5-5,5H6.974731440099276c-2.761423749148889,0-5-2.238576250849292-5-5V7.000000004336471c0-2.761423749150708,2.238576250851111-5,5-5h6","key":"0"}),
    createElement('line', {"x1":"17.974731440099276","y1":"6.000000004336471","x2":"21.974731440099276","y2":"2.000000004336471","key":"1"}),
    createElement('line', {"x1":"21.974731440199321","y1":"6.000000004245521","x2":"17.974731440010146","y2":"2.00000000442742","key":"2"}),
    createElement('rect', {"x":"5.974731440099276","y":"10.000000003885361","width":"4","height":"6","key":"3"}),
    createElement('rect', {"x":"9.974731440099276","y":"7.000000003885361","width":"4","height":"9","key":"4"}),
    createElement('rect', {"x":"13.974731440099276","y":"11.000000003885361","width":"4","height":"5","key":"5"})
  );
});

ChartBarSquareX.displayName = 'ChartBarSquareX';

module.exports = ChartBarSquareX;
module.exports.ChartBarSquareX = ChartBarSquareX;
module.exports.default = ChartBarSquareX;
