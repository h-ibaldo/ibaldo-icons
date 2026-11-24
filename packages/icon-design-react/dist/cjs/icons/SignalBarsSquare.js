'use strict';

const { createElement, forwardRef } = require('react');

const SignalBarsSquare = forwardRef(function SignalBarsSquare(
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
    createElement('path', {"d":"M6 16L6 14","key":"0"}),
    createElement('path', {"d":"M10 16L10 12","key":"1"}),
    createElement('path', {"d":"M14 16L14 10","key":"2"}),
    createElement('path', {"d":"M18 16L18 8","key":"3"}),
    createElement('path', {"d":"M19 20L5 20C3.344 20 2 18.656 2 17L2 7C2 5.344 3.344 4 5 4L19 4C20.656 4 22 5.344 22 7L22 17C22 18.656 20.656 20 19 20Z","key":"4"})
  );
});

SignalBarsSquare.displayName = 'SignalBarsSquare';

module.exports = SignalBarsSquare;
module.exports.SignalBarsSquare = SignalBarsSquare;
module.exports.default = SignalBarsSquare;
