'use strict';

const { createElement, forwardRef } = require('react');

const FilePushpinPlain = forwardRef(function FilePushpinPlain(
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
    createElement('path', {"d":"M20 15.034L15 10.034","key":"0"}),
    createElement('path', {"d":"M13 20.034L19 14.034","key":"1"}),
    createElement('path', {"d":"M9 16.034L14 21.034","key":"2"}),
    createElement('path', {"d":"M16 11.034L10 17.034","key":"3"}),
    createElement('path', {"d":"M16 17.034L20 21.034","key":"4"}),
    createElement('path', {"d":"M20 10.034L20 4.034C20 2.929 19.105 2.034 18 2.034L6 2.034C4.895 2.034 4 2.929 4 4.034L4 20.034C4 21.138 4.895 22.034 6 22.034L10 22.034","key":"5"})
  );
});

FilePushpinPlain.displayName = 'FilePushpinPlain';

module.exports = FilePushpinPlain;
module.exports.FilePushpinPlain = FilePushpinPlain;
module.exports.default = FilePushpinPlain;
