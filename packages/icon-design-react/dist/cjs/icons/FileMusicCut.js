'use strict';

const { createElement, forwardRef } = require('react');

const FileMusicCut = forwardRef(function FileMusicCut(
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
    createElement('path', {"d":"M21 15L18 14L18 21","key":"0"}),
    createElement('path', {"d":"M18 21C18 21.551 17.328 22 16.5 22C15.672 22 15 21.551 15 21C15 20.449 15.672 20 16.5 20C17.328 20 18 20.449 18 21Z","key":"1"}),
    createElement('path', {"d":"M20 10L20 7.828C20 7.297 19.789 6.789 19.414 6.414L15.586 2.586C15.211 2.211 14.703 2 14.172 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L11 22","key":"2"})
  );
});

FileMusicCut.displayName = 'FileMusicCut';

module.exports = FileMusicCut;
module.exports.FileMusicCut = FileMusicCut;
module.exports.default = FileMusicCut;
