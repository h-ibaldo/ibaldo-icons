'use strict';

const { createElement, forwardRef } = require('react');

const Text3DSyncChevron = forwardRef(function Text3DSyncChevron(
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
    createElement('path', {"d":"M14 9L14 15C15.656 15 17 13.656 17 12C17 10.344 15.656 9 14 9Z","key":"0"}),
    createElement('path', {"d":"M9.5 9C10.328 9 11 9.672 11 10.5C11 11.328 10.328 12 9.5 12","key":"1"}),
    createElement('path', {"d":"M9.5 12C10.328 12 11 12.672 11 13.5C11 14.328 10.328 15 9.5 15","key":"2"}),
    createElement('path', {"d":"M9.5 9L8 9","key":"3"}),
    createElement('path', {"d":"M9.5 12L9 12","key":"4"}),
    createElement('path', {"d":"M9.5 15L8 15","key":"5"}),
    createElement('path', {"d":"M14 5L12 2","key":"6"}),
    createElement('path', {"d":"M12 22L10 19","key":"7"}),
    createElement('path', {"d":"M8 2.84C4.469 4.383 2 7.898 2 12C2 17.523 6.477 22 12 22","key":"8"}),
    createElement('path', {"d":"M16 21.164C19.531 19.617 22 16.098 22 12C22 6.477 17.523 2 12 2","key":"9"})
  );
});

Text3DSyncChevron.displayName = 'Text3DSyncChevron';

module.exports = Text3DSyncChevron;
module.exports.Text3DSyncChevron = Text3DSyncChevron;
module.exports.default = Text3DSyncChevron;
