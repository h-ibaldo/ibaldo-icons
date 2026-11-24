'use strict';

const { createElement, forwardRef } = require('react');

const PresentationChart = forwardRef(function PresentationChart(
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
    createElement('rect', {"x":"2.025268558149946","y":"3.998782736171052","width":"20","height":"16.000000000003638","rx":"2","ry":"2","key":"0"}),
    createElement('path', {"d":"M9.525268558149946,8.498782736171052c-1.93300374349019,0-3.5,1.566996256511629-3.5,3.5,0,1.933003743492009,1.56699625650981,3.5,3.5,3.5s3.5-1.566996256507991,3.5-3.5h-3.5v-3.5Z","key":"1"}),
    createElement('line', {"x1":"16.025268558149946","y1":"8.998782736171052","x2":"18.025268558149946","y2":"8.998782736171052","key":"2"}),
    createElement('line', {"x1":"16.025268558149946","y1":"11.998782736171052","x2":"18.025268558149946","y2":"11.998782736171052","key":"3"}),
    createElement('line', {"x1":"16.025268558149946","y1":"14.998782736171052","x2":"18.025268558149946","y2":"14.998782736171052","key":"4"})
  );
});

PresentationChart.displayName = 'PresentationChart';

module.exports = PresentationChart;
module.exports.PresentationChart = PresentationChart;
module.exports.default = PresentationChart;
