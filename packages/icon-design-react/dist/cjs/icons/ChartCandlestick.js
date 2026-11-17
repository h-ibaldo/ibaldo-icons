'use strict';

const { createElement, forwardRef } = require('react');

const ChartCandlestick = forwardRef(function ChartCandlestick(
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
    createElement('rect', {"x":"2.016630450973025","y":"7.000000000480213","width":"4","height":"7.999999999996362","key":"0"}),
    createElement('line', {"x1":"4.016630450973025","y1":"4.000000000480213","x2":"4.016630450973025","y2":"7.000000000480213","key":"1"}),
    createElement('line', {"x1":"4.016630450973025","y1":"15.000000000480213","x2":"4.016630450973025","y2":"18.000000000480213","key":"2"}),
    createElement('rect', {"x":"10.016630450973025","y":"11.000000000480213","width":"4","height":"7.999999999996362","key":"3"}),
    createElement('line', {"x1":"12.016630450973025","y1":"8.000000000480213","x2":"12.016630450973025","y2":"11.000000000480213","key":"4"}),
    createElement('line', {"x1":"12.016630450973025","y1":"19.000000000480213","x2":"12.016630450973025","y2":"22.000000000480213","key":"5"}),
    createElement('rect', {"x":"18.016630450973025","y":"5.000000000480213","width":"4","height":"7.999999999996362","key":"6"}),
    createElement('line', {"x1":"20.016630450973025","y1":"2.000000000480213","x2":"20.016630450973025","y2":"5.000000000480213","key":"7"}),
    createElement('line', {"x1":"20.016630450973025","y1":"13.000000000480213","x2":"20.016630450973025","y2":"16.000000000480213","key":"8"})
  );
});

ChartCandlestick.displayName = 'ChartCandlestick';

module.exports = ChartCandlestick;
module.exports.ChartCandlestick = ChartCandlestick;
module.exports.default = ChartCandlestick;
