'use strict';

const { createElement, forwardRef } = require('react');

const ArrowConvergeFour = forwardRef(function ArrowConvergeFour(
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
    createElement('path', {"d":"M14 5L12 7L10 5","key":"0"}),
    createElement('path', {"d":"M12 2L12 7","key":"1"}),
    createElement('path', {"d":"M10 19L12 17L14 19","key":"2"}),
    createElement('path', {"d":"M12 22L12 17","key":"3"}),
    createElement('path', {"d":"M5 10L7 12L5 14","key":"4"}),
    createElement('path', {"d":"M2 12L7 12","key":"5"}),
    createElement('path', {"d":"M19 14L17 12L19 10","key":"6"}),
    createElement('path', {"d":"M22 12L17 12","key":"7"}),
    createElement('path', {"d":"M12 11C11.445 11 11 11.449 11 12C11 12.551 11.445 13 12 13C12.555 13 13 12.551 13 12C13 11.449 12.555 11 12 11Z","key":"8"})
  );
});

ArrowConvergeFour.displayName = 'ArrowConvergeFour';

module.exports = ArrowConvergeFour;
module.exports.ArrowConvergeFour = ArrowConvergeFour;
module.exports.default = ArrowConvergeFour;
