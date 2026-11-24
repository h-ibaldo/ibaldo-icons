'use strict';

const { createElement, forwardRef } = require('react');

const FileLockCut = forwardRef(function FileLockCut(
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
    createElement('path', {"d":"M16 22L18 22C19.105 22 20 21.105 20 20L20 7.828C20 7.298 19.789 6.789 19.414 6.414L15.586 2.586C15.211 2.211 14.702 2 14.172 2L6 2C4.895 2 4 2.895 4 4L4 9","key":"0"}),
    createElement('path', {"d":"M12 22L4 22L4 17L12 17L12 22Z","key":"1"}),
    createElement('path', {"d":"M5 17L5 15C5 13.343 6.343 12 8 12L8 12C9.657 12 11 13.343 11 15L11 17","key":"2"})
  );
});

FileLockCut.displayName = 'FileLockCut';

module.exports = FileLockCut;
module.exports.FileLockCut = FileLockCut;
module.exports.default = FileLockCut;
