'use strict';

const { createElement, forwardRef } = require('react');

const FileWinkPlain = forwardRef(function FileWinkPlain(
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
    createElement('path', {"d":"M9 15.034C9.776 15.648 10.827 16.034 12 16.034C13.173 16.034 14.224 15.648 15 15.034","key":"0"}),
    createElement('path', {"d":"M15 11.034L15 11.034","key":"1"}),
    createElement('path', {"d":"M10 11.034L8 11.034","key":"2"}),
    createElement('path', {"d":"M18 22.034L6 22.034C4.895 22.034 4 21.138 4 20.034L4 4.034C4 2.929 4.895 2.034 6 2.034L18 2.034C19.105 2.034 20 2.929 20 4.034L20 20.034C20 21.138 19.105 22.034 18 22.034Z","key":"3"})
  );
});

FileWinkPlain.displayName = 'FileWinkPlain';

module.exports = FileWinkPlain;
module.exports.FileWinkPlain = FileWinkPlain;
module.exports.default = FileWinkPlain;
