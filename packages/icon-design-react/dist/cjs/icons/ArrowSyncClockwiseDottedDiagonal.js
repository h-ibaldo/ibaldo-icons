'use strict';

const { createElement, forwardRef } = require('react');

const ArrowSyncClockwiseDottedDiagonal = forwardRef(function ArrowSyncClockwiseDottedDiagonal(
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
    createElement('path', {"d":"M12 3L12 3","key":"0"}),
    createElement('path', {"d":"M18.363 5.637L18.363 5.637","key":"1"}),
    createElement('path', {"d":"M15.445 3.684L15.445 3.684","key":"2"}),
    createElement('path', {"d":"M21 20L17 20L17 16","key":"3"}),
    createElement('path', {"d":"M17 19.48C19.41 17.867 21 15.121 21 12C21 10.781 20.754 9.617 20.313 8.555","key":"4"}),
    createElement('path', {"d":"M12 21L12 21","key":"5"}),
    createElement('path', {"d":"M5.637 18.363L5.637 18.363","key":"6"}),
    createElement('path', {"d":"M8.555 20.316L8.555 20.316","key":"7"}),
    createElement('path', {"d":"M3 4L7 4L7 8","key":"8"}),
    createElement('path', {"d":"M7 4.52C4.59 6.133 3 8.879 3 12C3 13.219 3.246 14.383 3.688 15.445","key":"9"})
  );
});

ArrowSyncClockwiseDottedDiagonal.displayName = 'ArrowSyncClockwiseDottedDiagonal';

module.exports = ArrowSyncClockwiseDottedDiagonal;
module.exports.ArrowSyncClockwiseDottedDiagonal = ArrowSyncClockwiseDottedDiagonal;
module.exports.default = ArrowSyncClockwiseDottedDiagonal;
