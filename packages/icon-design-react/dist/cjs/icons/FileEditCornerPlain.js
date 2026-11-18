'use strict';

const { createElement, forwardRef } = require('react');

const FileEditCornerPlain = forwardRef(function FileEditCornerPlain(
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
    createElement('path', {"d":"M20.414 18.276C21.195 17.495 21.195 16.229 20.414 15.448L14 9.034L11 9.034L11 12.034L17.414 18.448C18.195 19.229 19.462 19.229 20.243 18.448L20.414 18.276Z","key":"0"}),
    createElement('path', {"d":"M16 17.034L19 14.034","key":"1"}),
    createElement('path', {"d":"M17 18.034","key":"2"}),
    createElement('path', {"d":"M17 22.034L5 22.034C3.895 22.034 3 21.138 3 20.034L3 4.034C3 2.929 3.895 2.034 5 2.034L17 2.034C18.105 2.034 19 2.929 19 4.034L19 8.034","key":"3"})
  );
});

FileEditCornerPlain.displayName = 'FileEditCornerPlain';

module.exports = FileEditCornerPlain;
module.exports.FileEditCornerPlain = FileEditCornerPlain;
module.exports.default = FileEditCornerPlain;
