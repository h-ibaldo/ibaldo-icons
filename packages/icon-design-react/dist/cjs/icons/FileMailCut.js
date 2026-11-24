'use strict';

const { createElement, forwardRef } = require('react');

const FileMailCut = forwardRef(function FileMailCut(
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
    createElement('path', {"d":"M21 22L11 22C10.448 22 10 21.552 10 21L10 14.302C10 13.749 10.448 13.302 11 13.302L21 13.302C21.552 13.302 22 13.749 22 14.302L22 21C22 21.552 21.552 22 21 22Z","key":"0"}),
    createElement('path', {"d":"M10.325 13.573L15.309 18.339C15.695 18.709 16.305 18.709 16.691 18.339L21.675 13.573","key":"1"}),
    createElement('path', {"d":"M18 9L18 7.828C18 7.298 17.789 6.789 17.414 6.414L13.586 2.586C13.211 2.211 12.702 2 12.172 2L4 2C2.895 2 2 2.895 2 4L2 20C2 21.105 2.895 22 4 22L6 22","key":"2"})
  );
});

FileMailCut.displayName = 'FileMailCut';

module.exports = FileMailCut;
module.exports.FileMailCut = FileMailCut;
module.exports.default = FileMailCut;
