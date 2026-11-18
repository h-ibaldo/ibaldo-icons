'use strict';

const { createElement, forwardRef } = require('react');

const FileEditDetailedPlain = forwardRef(function FileEditDetailedPlain(
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
    createElement('path', {"d":"M21.707 7.879L19.121 5.293C18.731 4.902 18.098 4.902 17.707 5.293L9 14L9 18L13 18L21.707 9.293C22.098 8.902 22.098 8.269 21.707 7.879Z","key":"0"}),
    createElement('path', {"d":"M16 2L4 2C2.895 2 2 2.895 2 4L2 20C2 21.105 2.895 22 4 22L16 22C17.105 22 18 21.105 18 20L18 18","key":"1"}),
    createElement('path', {"d":"M15.5 7.5L19.5 11.5","key":"2"})
  );
});

FileEditDetailedPlain.displayName = 'FileEditDetailedPlain';

module.exports = FileEditDetailedPlain;
module.exports.FileEditDetailedPlain = FileEditDetailedPlain;
module.exports.default = FileEditDetailedPlain;
