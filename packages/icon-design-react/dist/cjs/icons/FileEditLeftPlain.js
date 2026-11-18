'use strict';

const { createElement, forwardRef } = require('react');

const FileEditLeftPlain = forwardRef(function FileEditLeftPlain(
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
    createElement('path', {"d":"M2.293 8.912L3.879 7.327C4.272 6.933 4.911 6.937 5.3 7.334L13 15.034L13 18.034L10 18.034L2.285 10.319C1.902 9.927 1.905 9.3 2.293 8.912Z","key":"0"}),
    createElement('path', {"d":"M5 4.034C5 2.929 5.895 2.034 7 2.034L19 2.034C20.105 2.034 21 2.929 21 4.034L21 20.034C21 21.138 20.105 22.034 19 22.034L7 22.034C5.895 22.034 5 21.138 5 20.034L5 18.034","key":"1"})
  );
});

FileEditLeftPlain.displayName = 'FileEditLeftPlain';

module.exports = FileEditLeftPlain;
module.exports.FileEditLeftPlain = FileEditLeftPlain;
module.exports.default = FileEditLeftPlain;
