'use strict';

const { createElement, forwardRef } = require('react');

const FormControlsGridX = forwardRef(function FormControlsGridX(
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
    createElement('path', {"d":"M13 2L22 2L22 11L13 11Z","key":"0"}),
    createElement('path', {"d":"M11 13L2 13L2 22L11 22Z","key":"1"}),
    createElement('path', {"d":"M5 18L6 19L8 16","key":"2"}),
    createElement('path', {"d":"M16 5L19 8","key":"3"}),
    createElement('path', {"d":"M16 8L19 5","key":"4"}),
    createElement('path', {"d":"M16.496 16.496L19.004 19.004","key":"5"}),
    createElement('path', {"d":"M16.496 19.004L19.004 16.496","key":"6"}),
    createElement('path', {"d":"M10.5 6.25C10.5 8.598 8.598 10.5 6.25 10.5C3.902 10.5 2 8.598 2 6.25C2 3.902 3.902 2 6.25 2C8.598 2 10.5 3.902 10.5 6.25Z","key":"7"}),
    createElement('path', {"d":"M6.75 6.25C6.75 6.527 6.527 6.75 6.25 6.75C5.973 6.75 5.75 6.527 5.75 6.25C5.75 5.973 5.973 5.75 6.25 5.75C6.527 5.75 6.75 5.973 6.75 6.25Z","key":"8"}),
    createElement('path', {"d":"M22 17.75C22 20.098 20.098 22 17.75 22C15.402 22 13.5 20.098 13.5 17.75C13.5 15.402 15.402 13.5 17.75 13.5C20.098 13.5 22 15.402 22 17.75Z","key":"9"})
  );
});

FormControlsGridX.displayName = 'FormControlsGridX';

module.exports = FormControlsGridX;
module.exports.FormControlsGridX = FormControlsGridX;
module.exports.default = FormControlsGridX;
