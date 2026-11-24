'use strict';

const { createElement, forwardRef } = require('react');

const CrosshairRing = forwardRef(function CrosshairRing(
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
    createElement('path', {"d":"M3 12C3 7.031 7.031 3 12 3C16.969 3 21 7.031 21 12C21 16.969 16.969 21 12 21C7.031 21 3 16.969 3 12Z","key":"0"}),
    createElement('path', {"d":"M7 12C7 9.238 9.238 7 12 7C14.762 7 17 9.238 17 12C17 14.762 14.762 17 12 17C9.238 17 7 14.762 7 12Z","key":"1"}),
    createElement('path', {"d":"M12 2L12 9","key":"2"}),
    createElement('path', {"d":"M12 15L12 22","key":"3"}),
    createElement('path', {"d":"M22 12L15 12","key":"4"}),
    createElement('path', {"d":"M9 12L2 12","key":"5"})
  );
});

CrosshairRing.displayName = 'CrosshairRing';

module.exports = CrosshairRing;
module.exports.CrosshairRing = CrosshairRing;
module.exports.default = CrosshairRing;
