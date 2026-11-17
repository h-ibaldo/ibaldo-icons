'use strict';

const { createElement, forwardRef } = require('react');

const SkipLineOver1 = forwardRef(function SkipLineOver1(
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
    createElement('rect', {"x":"1.974731440099276","y":"15.000000003885361","width":"4","height":"4","key":"0"}),
    createElement('rect', {"x":"9.974731440099276","y":"15.000000003885361","width":"4","height":"4","key":"1"}),
    createElement('rect', {"x":"17.974731440099276","y":"15.000000003885361","width":"4","height":"4","key":"2"}),
    createElement('polyline', {"points":"21.974731440099276 7.000000003885361 21.974731440099276 11.000000003885361 17.974731440099276 11.000000003885361","key":"3"}),
    createElement('path', {"d":"M21.450683588549509,11.000000003885361c-1.686401367200233-3.54412841796875-5.289733886729664-6-9.475952148450233-6-4.186218261709655,0-7.78955078125,2.45587158203125-9.475952148439319,6","key":"4"})
  );
});

SkipLineOver1.displayName = 'SkipLineOver1';

module.exports = SkipLineOver1;
module.exports.SkipLineOver1 = SkipLineOver1;
module.exports.default = SkipLineOver1;
