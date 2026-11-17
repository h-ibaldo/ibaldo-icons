'use strict';

const { createElement, forwardRef } = require('react');

const DockBottom = forwardRef(function DockBottom(
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
    createElement('rect', {"x":"1.974731417511066","y":"9.998779298535737","width":"20","height":"12","rx":"1","ry":"1","key":"0"}),
    createElement('polyline', {"points":"8.974731417511066 4.998779298535737 11.974731417511066 1.998779298535737 14.974731417511066 4.998779298535737","key":"1"}),
    createElement('line', {"x1":"1.974731417511066","y1":"13.998779298535737","x2":"21.974731417511066","y2":"13.998779298535737","key":"2"})
  );
});

DockBottom.displayName = 'DockBottom';

module.exports = DockBottom;
module.exports.DockBottom = DockBottom;
module.exports.default = DockBottom;
