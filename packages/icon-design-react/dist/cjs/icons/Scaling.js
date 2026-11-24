'use strict';

const { createElement, forwardRef } = require('react');

const Scaling = forwardRef(function Scaling(
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
    createElement('path', {"d":"M10.305 13.695L21.699 2.301","key":"0"}),
    createElement('path', {"d":"M16 14L11 14C10.449 14 10 13.551 10 13L10 8","key":"1"}),
    createElement('path', {"d":"M16 2L21 2C21.551 2 22 2.449 22 3L22 8","key":"2"}),
    createElement('path', {"d":"M22 12L22 21C22 21.551 21.551 22 21 22L3 22C2.449 22 2 21.551 2 21L2 3C2 2.449 2.449 2 3 2L12 2","key":"3"})
  );
});

Scaling.displayName = 'Scaling';

module.exports = Scaling;
module.exports.Scaling = Scaling;
module.exports.default = Scaling;
