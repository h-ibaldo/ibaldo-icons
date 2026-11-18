'use strict';

const { createElement, forwardRef } = require('react');

const WindowSpinnerDotsArc = forwardRef(function WindowSpinnerDotsArc(
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
    createElement('path', {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22Z","key":"0"}),
    createElement('path', {"d":"M2 8L22 8","key":"1"}),
    createElement('path', {"d":"M5 5L5 5","key":"2"}),
    createElement('path', {"d":"M8 5L8 5","key":"3"}),
    createElement('path', {"d":"M11 5L11 5","key":"4"}),
    createElement('path', {"d":"M8 15L8 15","key":"5"}),
    createElement('path', {"d":"M12 11L12 11","key":"6"}),
    createElement('path', {"d":"M12 19L12 19","key":"7"}),
    createElement('path', {"d":"M9.172 17.828L9.172 17.828","key":"8"}),
    createElement('path', {"d":"M14.828 12.172L14.828 12.172","key":"9"}),
    createElement('path', {"d":"M9.172 12.172L9.172 12.172","key":"10"})
  );
});

WindowSpinnerDotsArc.displayName = 'WindowSpinnerDotsArc';

module.exports = WindowSpinnerDotsArc;
module.exports.WindowSpinnerDotsArc = WindowSpinnerDotsArc;
module.exports.default = WindowSpinnerDotsArc;
