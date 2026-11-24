'use strict';

const { createElement, forwardRef } = require('react');

const SignalBars = forwardRef(function SignalBars(
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
    createElement('path', {"d":"M2 21L2 15","key":"0"}),
    createElement('path', {"d":"M7 21L7 12","key":"1"}),
    createElement('path', {"d":"M12 21L12 9","key":"2"}),
    createElement('path', {"d":"M17 21L17 6","key":"3"}),
    createElement('path', {"d":"M22 21L22 3","key":"4"})
  );
});

SignalBars.displayName = 'SignalBars';

module.exports = SignalBars;
module.exports.SignalBars = SignalBars;
module.exports.default = SignalBars;
