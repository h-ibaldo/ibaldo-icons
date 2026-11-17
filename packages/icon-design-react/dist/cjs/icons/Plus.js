'use strict';

const { createElement, forwardRef } = require('react');

const Plus = forwardRef(function Plus(
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
    createElement('line', {"x1":"11.974731445219732","y1":"3.000000000448381","x2":"11.974731445219732","y2":"21.0000000004502","key":"0"}),
    createElement('line', {"x1":"20.974731445219732","y1":"12.0000000004502","x2":"2.974731445219732","y2":"12.0000000004502","key":"1"})
  );
});

Plus.displayName = 'Plus';

module.exports = Plus;
module.exports.Plus = Plus;
module.exports.default = Plus;
