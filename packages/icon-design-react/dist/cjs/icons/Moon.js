'use strict';

const { createElement, forwardRef } = require('react');

const Moon = forwardRef(function Moon(
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
    createElement('path', {"d":"M21.5 13.492A9.564 9.564 0 1 1 10.508 2.5","key":"0"}),
    createElement('path', {"d":"M21.5 13.492A8.501 8.501 0 0 1 10.508 2.5","key":"1"})
  );
});

Moon.displayName = 'Moon';

module.exports = Moon;
module.exports.Moon = Moon;
module.exports.default = Moon;
