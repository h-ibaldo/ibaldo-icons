'use strict';

const { createElement, forwardRef } = require('react');

const WindowSpinnerRaysPlain = forwardRef(function WindowSpinnerRaysPlain(
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
    createElement('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"0"}),
    createElement('path', {"d":"M2 8L22 8","key":"1"}),
    createElement('path', {"d":"M12 11L12 12","key":"2"}),
    createElement('path', {"d":"M12 18L12 19","key":"3"}),
    createElement('path', {"d":"M8.535 13L9.402 13.5","key":"4"}),
    createElement('path', {"d":"M14.598 16.5L15.465 17","key":"5"}),
    createElement('path', {"d":"M8.535 17L9.402 16.5","key":"6"}),
    createElement('path', {"d":"M14.598 13.5L15.465 13","key":"7"})
  );
});

WindowSpinnerRaysPlain.displayName = 'WindowSpinnerRaysPlain';

module.exports = WindowSpinnerRaysPlain;
module.exports.WindowSpinnerRaysPlain = WindowSpinnerRaysPlain;
module.exports.default = WindowSpinnerRaysPlain;
