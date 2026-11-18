'use strict';

const { createElement, forwardRef } = require('react');

const FileArrowInCut = forwardRef(function FileArrowInCut(
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
    createElement('path', {"d":"M9 22L12 19L9 16","key":"0"}),
    createElement('path', {"d":"M4 19L12 19","key":"1"}),
    createElement('path', {"d":"M4 14L4 4C4 2.895 4.895 2 6 2L14.172 2C14.702 2 15.211 2.211 15.586 2.586L19.414 6.414C19.789 6.789 20 7.298 20 7.828L20 20C20 21.105 19.105 22 18 22L16 22","key":"2"})
  );
});

FileArrowInCut.displayName = 'FileArrowInCut';

module.exports = FileArrowInCut;
module.exports.FileArrowInCut = FileArrowInCut;
module.exports.default = FileArrowInCut;
