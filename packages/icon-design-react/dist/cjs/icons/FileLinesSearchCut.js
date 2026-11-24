'use strict';

const { createElement, forwardRef } = require('react');

const FileLinesSearchCut = forwardRef(function FileLinesSearchCut(
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
    createElement('path', {"d":"M19 21","key":"0"}),
    createElement('path', {"d":"M19 9L19 7.828C19 7.298 18.789 6.789 18.414 6.414L14.586 2.586C14.211 2.211 13.702 2 13.172 2L5 2C3.895 2 3 2.895 3 4L3 20C3 21.105 3.895 22 5 22L11 22","key":"1"}),
    createElement('path', {"d":"M20 16C20 18.209 18.209 20 16 20C13.791 20 12 18.209 12 16C12 13.791 13.791 12 16 12C18.209 12 20 13.791 20 16Z","key":"2"}),
    createElement('path', {"d":"M19 19L22 22","key":"3"}),
    createElement('path', {"d":"M7 8L13 8","key":"4"}),
    createElement('path', {"d":"M7 12L9 12","key":"5"}),
    createElement('path', {"d":"M7 16L9 16","key":"6"})
  );
});

FileLinesSearchCut.displayName = 'FileLinesSearchCut';

module.exports = FileLinesSearchCut;
module.exports.FileLinesSearchCut = FileLinesSearchCut;
module.exports.default = FileLinesSearchCut;
