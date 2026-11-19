'use strict';

const { createElement, forwardRef } = require('react');

const FileStackPlain = forwardRef(function FileStackPlain(
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
    createElement('path', {"d":"M3 7.034L3 20.034C3 21.138 3.895 22.034 5 22.034L16 22.034","key":"0"}),
    createElement('path', {"d":"M9 18.034L19 18.034C20.105 18.034 21 17.138 21 16.034L21 4.034C21 2.929 20.105 2.034 19 2.034L9 2.034C7.895 2.034 7 2.929 7 4.034L7 16.034C7 17.138 7.895 18.034 9 18.034Z","key":"1"})
  );
});

FileStackPlain.displayName = 'FileStackPlain';

module.exports = FileStackPlain;
module.exports.FileStackPlain = FileStackPlain;
module.exports.default = FileStackPlain;
