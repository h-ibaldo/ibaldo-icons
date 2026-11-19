'use strict';

const { createElement, forwardRef } = require('react');

const FileCheckCircleCut = forwardRef(function FileCheckCircleCut(
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
    createElement('path', {"d":"M14.5 17L15.5 18L17.5 16","key":"0"}),
    createElement('path', {"d":"M11 17C11 14.239 13.239 12 16 12C18.761 12 21 14.239 21 17C21 19.761 18.761 22 16 22C13.239 22 11 19.761 11 17Z","key":"1"}),
    createElement('path', {"d":"M20 9L20 7.828C20 7.298 19.789 6.789 19.414 6.414L15.586 2.586C15.211 2.211 14.702 2 14.172 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L9 22","key":"2"})
  );
});

FileCheckCircleCut.displayName = 'FileCheckCircleCut';

module.exports = FileCheckCircleCut;
module.exports.FileCheckCircleCut = FileCheckCircleCut;
module.exports.default = FileCheckCircleCut;
