'use strict';

const { createElement, forwardRef } = require('react');

const ChartBarSquareCheckThin = forwardRef(function ChartBarSquareCheckThin(
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
    createElement('polyline', {"points":"16.974731440099276 4.000000003885361 18.974731440099276 6.000000003885361 21.974731440099276 3.000000003885361","key":"0"}),
    createElement('path', {"d":"M21.974731440099276,9.000000003885361v8c0,2.761423749150708-2.238576250838378,5-5,5H6.974731440099276c-2.761423749148889,0-5-2.238576250849292-5-5V7.000000003885361c0-2.761423749150708,2.238576250851111-5,5-5h6","key":"1"}),
    createElement('line', {"x1":"7.974731440099276","y1":"16.000000003885361","x2":"7.974731440099276","y2":"12.000000003885361","key":"2"}),
    createElement('line', {"x1":"11.974731440099276","y1":"16.000000003885361","x2":"11.974731440099276","y2":"8.000000003885361","key":"3"}),
    createElement('line', {"x1":"15.974731440099276","y1":"16.000000003885361","x2":"15.974731440099276","y2":"11.000000003885361","key":"4"})
  );
});

ChartBarSquareCheckThin.displayName = 'ChartBarSquareCheckThin';

module.exports = ChartBarSquareCheckThin;
module.exports.ChartBarSquareCheckThin = ChartBarSquareCheckThin;
module.exports.default = ChartBarSquareCheckThin;
