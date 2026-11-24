'use strict';

const { createElement, forwardRef } = require('react');

const FileUnlockCut = forwardRef(function FileUnlockCut(
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
    createElement('path', {"d":"M12 22L4 22L4 17L12 17L12 22Z","key":"0"}),
    createElement('path', {"d":"M10.213 13C9.667 12.39 8.884 12 8 12C6.343 12 5 13.343 5 15L5 17","key":"1"}),
    createElement('path', {"d":"M16 22L18 22C19.105 22 20 21.105 20 20L20 7.828C20 7.298 19.789 6.789 19.414 6.414L15.586 2.586C15.211 2.211 14.702 2 14.172 2L6 2C4.895 2 4 2.895 4 4L4 9","key":"2"})
  );
});

FileUnlockCut.displayName = 'FileUnlockCut';

module.exports = FileUnlockCut;
module.exports.FileUnlockCut = FileUnlockCut;
module.exports.default = FileUnlockCut;
