'use strict';

const { createElement, forwardRef } = require('react');

const StepForward = forwardRef(function StepForward(
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
    createElement('path', {"d":"M8 4.918L8 19.082C8 20.32 9.371 21.063 10.41 20.391L21.293 13.309C22.234 12.691 22.234 11.309 21.293 10.691L10.41 3.609C9.371 2.938 8 3.68 8 4.918Z","key":"0"}),
    createElement('path', {"d":"M2 4L2 20","key":"1"})
  );
});

StepForward.displayName = 'StepForward';

module.exports = StepForward;
module.exports.StepForward = StepForward;
module.exports.default = StepForward;
