'use strict';

const { createElement, forwardRef } = require('react');

const ArrowDivergeFourLarge = forwardRef(function ArrowDivergeFourLarge(
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
    createElement('path', {"d":"M9 5L12 2L15 5","key":"0"}),
    createElement('path', {"d":"M12 7L12 2","key":"1"}),
    createElement('path', {"d":"M15 19L12 22L9 19","key":"2"}),
    createElement('path', {"d":"M12 17L12 22","key":"3"}),
    createElement('path', {"d":"M19 9L22 12L19 15","key":"4"}),
    createElement('path', {"d":"M17 12L22 12","key":"5"}),
    createElement('path', {"d":"M5 15L2 12L5 9","key":"6"}),
    createElement('path', {"d":"M7 12L2 12","key":"7"}),
    createElement('path', {"d":"M12 11C11.445 11 11 11.449 11 12C11 12.551 11.445 13 12 13C12.555 13 13 12.551 13 12C13 11.449 12.555 11 12 11Z","key":"8"})
  );
});

ArrowDivergeFourLarge.displayName = 'ArrowDivergeFourLarge';

module.exports = ArrowDivergeFourLarge;
module.exports.ArrowDivergeFourLarge = ArrowDivergeFourLarge;
module.exports.default = ArrowDivergeFourLarge;
