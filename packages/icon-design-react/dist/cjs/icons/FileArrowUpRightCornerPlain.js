'use strict';

const { createElement, forwardRef } = require('react');

const FileArrowUpRightCornerPlain = forwardRef(function FileArrowUpRightCornerPlain(
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
    createElement('path', {"d":"M20 20.034L20 16.034L16 16.034","key":"0"}),
    createElement('path', {"d":"M14 22.034L20 16.034","key":"1"}),
    createElement('path', {"d":"M20 12.034L20 4.034C20 2.929 19.105 2.034 18 2.034L6 2.034C4.895 2.034 4 2.929 4 4.034L4 20.034C4 21.138 4.895 22.034 6 22.034L10 22.034","key":"2"})
  );
});

FileArrowUpRightCornerPlain.displayName = 'FileArrowUpRightCornerPlain';

module.exports = FileArrowUpRightCornerPlain;
module.exports.FileArrowUpRightCornerPlain = FileArrowUpRightCornerPlain;
module.exports.default = FileArrowUpRightCornerPlain;
