'use strict';

const { createElement, forwardRef } = require('react');

const FileCheckCornerPlain = forwardRef(function FileCheckCornerPlain(
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
    createElement('path', {"d":"M15 20.034L17 22.034L21 18.034","key":"0"}),
    createElement('path', {"d":"M20 14.034L20 4.034C20 2.929 19.105 2.034 18 2.034L6 2.034C4.895 2.034 4 2.929 4 4.034L4 20.034C4 21.138 4.895 22.034 6 22.034L11 22.034","key":"1"})
  );
});

FileCheckCornerPlain.displayName = 'FileCheckCornerPlain';

module.exports = FileCheckCornerPlain;
module.exports.FileCheckCornerPlain = FileCheckCornerPlain;
module.exports.default = FileCheckCornerPlain;
