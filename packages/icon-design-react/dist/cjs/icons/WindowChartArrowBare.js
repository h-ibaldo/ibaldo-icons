'use strict';

const { createElement, forwardRef } = require('react');

const WindowChartArrowBare = forwardRef(function WindowChartArrowBare(
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
    createElement('rect', {"x":"2.00000000018008","y":"2.00000000044929","width":"20","height":"20","rx":"1.999999999999977","ry":"1.999999999999977","key":"0"}),
    createElement('polyline', {"points":"6.00000000018008 17.0000000004502 10.00000000018008 13.000000000446562 13.00000000018008 16.000000000448381 18.00000000018008 11.0000000004502","key":"1"}),
    createElement('polyline', {"points":"15.00000000018008 11.000000000448381 18.00000000018008 11.000000000448381 18.00000000018008 14.000000000448381","key":"2"}),
    createElement('line', {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381","key":"3"}),
    createElement('line', {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381","key":"4"}),
    createElement('line', {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381","key":"5"})
  );
});

WindowChartArrowBare.displayName = 'WindowChartArrowBare';

module.exports = WindowChartArrowBare;
module.exports.WindowChartArrowBare = WindowChartArrowBare;
module.exports.default = WindowChartArrowBare;
