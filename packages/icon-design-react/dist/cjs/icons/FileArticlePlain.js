'use strict';

const { createElement, forwardRef } = require('react');

const FileArticlePlain = forwardRef(function FileArticlePlain(
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
    createElement('path', {"d":"M19 22.034L5 22.034C3.895 22.034 3 21.138 3 20.034L3 4.034C3 2.929 3.895 2.034 5 2.034L19 2.034C20.105 2.034 21 2.929 21 4.034L21 20.034C21 21.138 20.105 22.034 19 22.034Z","key":"0"}),
    createElement('path', {"d":"M11 10.034L7 10.034L7 6.034L11 6.034L11 10.034Z","key":"1"}),
    createElement('path', {"d":"M15 10.034L17 10.034","key":"2"}),
    createElement('path', {"d":"M15 6.034L17 6.034","key":"3"}),
    createElement('path', {"d":"M7 14.034L17 14.034","key":"4"}),
    createElement('path', {"d":"M7 18.034L17 18.034","key":"5"})
  );
});

FileArticlePlain.displayName = 'FileArticlePlain';

module.exports = FileArticlePlain;
module.exports.FileArticlePlain = FileArticlePlain;
module.exports.default = FileArticlePlain;
