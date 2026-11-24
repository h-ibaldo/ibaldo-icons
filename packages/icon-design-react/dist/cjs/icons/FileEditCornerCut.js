'use strict';

const { createElement, forwardRef } = require('react');

const FileEditCornerCut = forwardRef(function FileEditCornerCut(
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
    createElement('path', {"d":"M21.414 21.243C22.195 20.462 22.195 19.195 21.414 18.414L16 13L13 13L13 16L18.414 21.414C19.195 22.195 20.462 22.195 21.243 21.414L21.414 21.243Z","key":"0"}),
    createElement('path', {"d":"M17 20L20 17","key":"1"}),
    createElement('path', {"d":"M18 21","key":"2"}),
    createElement('path', {"d":"M20 12L20 7.828C20 7.298 19.789 6.789 19.414 6.414L15.586 2.586C15.211 2.211 14.702 2 14.172 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L14 22","key":"3"})
  );
});

FileEditCornerCut.displayName = 'FileEditCornerCut';

module.exports = FileEditCornerCut;
module.exports.FileEditCornerCut = FileEditCornerCut;
module.exports.default = FileEditCornerCut;
