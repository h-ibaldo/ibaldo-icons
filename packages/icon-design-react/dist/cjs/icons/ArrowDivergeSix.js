'use strict';

const { createElement, forwardRef } = require('react');

const ArrowDivergeSix = forwardRef(function ArrowDivergeSix(
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
    createElement('path', {"d":"M10 4L12 2L14 4","key":"0"}),
    createElement('path', {"d":"M12 7L12 2","key":"1"}),
    createElement('path', {"d":"M14 20L12 22L10 20","key":"2"}),
    createElement('path', {"d":"M12 17L12 22","key":"3"}),
    createElement('path', {"d":"M4.074 9.73L3.34 7L6.074 6.27","key":"4"}),
    createElement('path', {"d":"M7.668 9.5L3.34 7","key":"5"}),
    createElement('path', {"d":"M19.926 14.27L20.66 17L17.926 17.73","key":"6"}),
    createElement('path', {"d":"M16.332 14.5L20.66 17","key":"7"}),
    createElement('path', {"d":"M6.074 17.73L3.34 17L4.074 14.27","key":"8"}),
    createElement('path', {"d":"M7.668 14.5L3.34 17","key":"9"}),
    createElement('path', {"d":"M17.926 6.27L20.66 7L19.926 9.73","key":"10"}),
    createElement('path', {"d":"M16.332 9.5L20.66 7","key":"11"}),
    createElement('path', {"d":"M12 11C11.445 11 11 11.449 11 12C11 12.551 11.445 13 12 13C12.555 13 13 12.551 13 12C13 11.449 12.555 11 12 11Z","key":"12"})
  );
});

ArrowDivergeSix.displayName = 'ArrowDivergeSix';

module.exports = ArrowDivergeSix;
module.exports.ArrowDivergeSix = ArrowDivergeSix;
module.exports.default = ArrowDivergeSix;
