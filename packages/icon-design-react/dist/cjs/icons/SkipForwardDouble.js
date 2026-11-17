'use strict';

const { createElement, forwardRef } = require('react');

const SkipForwardDouble = forwardRef(function SkipForwardDouble(
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
    createElement('path', {"d":"M2 6.332L2 17.668C2 18.473 2.93 18.918 3.555 18.414L10.641 12.746C11.121 12.363 11.121 11.637 10.641 11.254L3.555 5.586C2.93 5.082 2 5.527 2 6.332Z","key":"0"}),
    createElement('path', {"d":"M11 6.332L11 17.668C11 18.473 11.93 18.918 12.555 18.414L19.641 12.746C20.121 12.363 20.121 11.637 19.641 11.254L12.555 5.586C11.93 5.082 11 5.527 11 6.332Z","key":"1"}),
    createElement('path', {"d":"M22 5L22 19","key":"2"})
  );
});

SkipForwardDouble.displayName = 'SkipForwardDouble';

module.exports = SkipForwardDouble;
module.exports.SkipForwardDouble = SkipForwardDouble;
module.exports.default = SkipForwardDouble;
