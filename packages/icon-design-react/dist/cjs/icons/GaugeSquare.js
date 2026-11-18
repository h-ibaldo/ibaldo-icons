'use strict';

const { createElement, forwardRef } = require('react');

const GaugeSquare = forwardRef(function GaugeSquare(
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
    createElement('path', {"d":"M10 12C10 10.895 10.895 10 12 10C13.105 10 14 10.895 14 12C14 13.105 13.105 14 12 14C10.895 14 10 13.105 10 12Z","key":"0"}),
    createElement('path', {"d":"M18 6L13.414 10.586","key":"1"}),
    createElement('path', {"d":"M10.586 13.414L9 15","key":"2"}),
    createElement('path', {"d":"M18 22L6 22C3.789 22 2 20.211 2 18L2 6C2 3.789 3.789 2 6 2L18 2C20.211 2 22 3.789 22 6L22 18C22 20.211 20.211 22 18 22Z","key":"3"})
  );
});

GaugeSquare.displayName = 'GaugeSquare';

module.exports = GaugeSquare;
module.exports.GaugeSquare = GaugeSquare;
module.exports.default = GaugeSquare;
