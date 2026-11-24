'use strict';

const { createElement, forwardRef } = require('react');

const FileFilm = forwardRef(function FileFilm(
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
    createElement('path', {"d":"M5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L13.016 2C13.645 2 14.25 2.25 14.695 2.695L18.305 6.305C18.75 6.75 19 7.355 19 7.984L19 9","key":"0"}),
    createElement('path', {"d":"M13 2L13 7C13 7.551 13.449 8 14 8L19 8","key":"1"}),
    createElement('path', {"d":"M8 12L21 12L21 22L8 22Z","key":"2"}),
    createElement('path', {"d":"M11 14.988L11 15","key":"3"}),
    createElement('path', {"d":"M11 20.988L11 22","key":"4"}),
    createElement('path', {"d":"M18 14.988L18 15","key":"5"}),
    createElement('path', {"d":"M11 17.988L11 18","key":"6"}),
    createElement('path', {"d":"M18 17.988L18 18","key":"7"}),
    createElement('path', {"d":"M18 20.988L18 22","key":"8"})
  );
});

FileFilm.displayName = 'FileFilm';

module.exports = FileFilm;
module.exports.FileFilm = FileFilm;
module.exports.default = FileFilm;
