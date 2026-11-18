'use strict';

const { createElement, forwardRef } = require('react');

const ArrowConvergeFourLarge = forwardRef(function ArrowConvergeFourLarge(
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
    createElement('path', {"d":"M15 4L12 7L9 4","key":"0"}),
    createElement('path', {"d":"M12 2L12 7","key":"1"}),
    createElement('path', {"d":"M9 20L12 17L15 20","key":"2"}),
    createElement('path', {"d":"M12 22L12 17","key":"3"}),
    createElement('path', {"d":"M4 9L7 12L4 15","key":"4"}),
    createElement('path', {"d":"M2 12L7 12","key":"5"}),
    createElement('path', {"d":"M20 15L17 12L20 9","key":"6"}),
    createElement('path', {"d":"M22 12L17 12","key":"7"}),
    createElement('path', {"d":"M12 11C11.445 11 11 11.449 11 12C11 12.551 11.445 13 12 13C12.555 13 13 12.551 13 12C13 11.449 12.555 11 12 11Z","key":"8"})
  );
});

ArrowConvergeFourLarge.displayName = 'ArrowConvergeFourLarge';

module.exports = ArrowConvergeFourLarge;
module.exports.ArrowConvergeFourLarge = ArrowConvergeFourLarge;
module.exports.default = ArrowConvergeFourLarge;
