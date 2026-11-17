'use strict';

const { createElement, forwardRef } = require('react');

const ChartBarArrowUpThin = forwardRef(function ChartBarArrowUpThin(
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
    createElement('polyline', {"points":"20.016630450434604 6.000000000480213 21.016630450836601 3.000000000614818 18.016630450973025 2.000000000211003","key":"0"}),
    createElement('line', {"x1":"2.016630450994853","y1":"12.000000000029104","x2":"21.016630451398669","y2":"3.000000000884029","key":"1"}),
    createElement('line', {"x1":"22.016630451129458","y1":"10.000000000480213","x2":"22.016630450545563","y2":"22.000000001378794","key":"2"}),
    createElement('line', {"x1":"18.016630451039418","y1":"12.000000000298314","x2":"18.016630450545563","y2":"22.000000001196895","key":"3"}),
    createElement('line', {"x1":"14.016630450951197","y1":"14.000000000120053","x2":"14.016630450545563","y2":"22.000000001018634","key":"4"}),
    createElement('line', {"x1":"10.016630450860248","y1":"15.999999999941792","x2":"10.016630450545563","y2":"22.000000000840373","key":"5"}),
    createElement('line', {"x1":"6.016630450769298","y1":"17.999999999759893","x2":"6.016630450545563","y2":"22.000000000658474","key":"6"}),
    createElement('line', {"x1":"2.016630450681077","y1":"19.999999999581632","x2":"2.016630450545563","y2":"22.000000000480213","key":"7"})
  );
});

ChartBarArrowUpThin.displayName = 'ChartBarArrowUpThin';

module.exports = ChartBarArrowUpThin;
module.exports.ChartBarArrowUpThin = ChartBarArrowUpThin;
module.exports.default = ChartBarArrowUpThin;
