'use strict';

const { createElement, forwardRef } = require('react');

const Box8 = forwardRef(function Box8(
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
    createElement('rect', {"x":"2","y":"1.999999999998181","width":"20","height":"20","rx":"1","ry":"1","key":"0"}),
    createElement('g', {"key":"1"},
      createElement('line', {"x1":"12","y1":"17.999999999998181","x2":"12","y2":"13.999999999998181","key":"0"}),
      createElement('polyline', {"points":"11 14.999999999998181 12 13.999999999998181 13 14.999999999998181","key":"1"})),
    createElement('g', {"key":"2"},
      createElement('line', {"x1":"17","y1":"17.999999999998181","x2":"17","y2":"13.999999999998181","key":"0"}),
      createElement('polyline', {"points":"16 14.999999999998181 17 13.999999999998181 18 14.999999999998181","key":"1"})),
    createElement('polyline', {"points":"9 1.999999999998181 9 6.999999999998181 15 6.999999999998181 15 1.999999999998181","key":"3"})
  );
});

Box8.displayName = 'Box8';

module.exports = Box8;
module.exports.Box8 = Box8;
module.exports.default = Box8;
