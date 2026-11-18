'use strict';

const { createElement, forwardRef } = require('react');

const FileArrowDownCornerPlain = forwardRef(function FileArrowDownCornerPlain(
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
    createElement('path', {"d":"M16 19.034L19 22.034L22 19.034","key":"0"}),
    createElement('path', {"d":"M19 16.034L19 22.034","key":"1"}),
    createElement('path', {"d":"M19 12.034L19 4.034C19 2.929 18.105 2.034 17 2.034L5 2.034C3.895 2.034 3 2.929 3 4.034L3 20.034C3 21.138 3.895 22.034 5 22.034L13 22.034","key":"2"})
  );
});

FileArrowDownCornerPlain.displayName = 'FileArrowDownCornerPlain';

module.exports = FileArrowDownCornerPlain;
module.exports.FileArrowDownCornerPlain = FileArrowDownCornerPlain;
module.exports.default = FileArrowDownCornerPlain;
