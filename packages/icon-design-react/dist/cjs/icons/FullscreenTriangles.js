'use strict';

const { createElement, forwardRef } = require('react');

const FullscreenTriangles = forwardRef(function FullscreenTriangles(
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
    createElement('polygon', {"points":"9.974731417511066 1.998779298535737 1.974731417511066 1.998779298535737 1.974731417511066 9.998779298535737 9.974731417511066 1.998779298535737","key":"0"}),
    createElement('polygon', {"points":"13.97473488191099 21.998778259117898 21.974731417813018 21.998778259117898 21.974731417813018 13.998781723219508 13.97473488191099 21.998778259117898","key":"1"})
  );
});

FullscreenTriangles.displayName = 'FullscreenTriangles';

module.exports = FullscreenTriangles;
module.exports.FullscreenTriangles = FullscreenTriangles;
module.exports.default = FullscreenTriangles;
