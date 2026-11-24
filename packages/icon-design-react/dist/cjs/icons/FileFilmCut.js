'use strict';

const { createElement, forwardRef } = require('react');

const FileFilmCut = forwardRef(function FileFilmCut(
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
    createElement('path', {"d":"M19 9L19 7.828C19 7.297 18.789 6.789 18.414 6.414L14.586 2.586C14.211 2.211 13.703 2 13.172 2L5 2C3.895 2 3 2.895 3 4L3 20C3 21.105 3.895 22 5 22","key":"0"}),
    createElement('path', {"d":"M8 12L21 12L21 22L8 22Z","key":"1"}),
    createElement('path', {"d":"M11 14.988L11 15","key":"2"}),
    createElement('path', {"d":"M11 20.988L11 22","key":"3"}),
    createElement('path', {"d":"M18 14.988L18 15","key":"4"}),
    createElement('path', {"d":"M11 17.988L11 18","key":"5"}),
    createElement('path', {"d":"M18 17.988L18 18","key":"6"}),
    createElement('path', {"d":"M18 20.988L18 22","key":"7"})
  );
});

FileFilmCut.displayName = 'FileFilmCut';

module.exports = FileFilmCut;
module.exports.FileFilmCut = FileFilmCut;
module.exports.default = FileFilmCut;
