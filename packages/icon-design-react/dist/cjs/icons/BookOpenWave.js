'use strict';

const { createElement, forwardRef } = require('react');

const BookOpenWave = forwardRef(function BookOpenWave(
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
    createElement('path', {"d":"M11.41 4.543C8.746 2.414 4.902 2.488 2.324 4.766C2.113 4.953 2 5.23 2 5.516L2 15.32C2 16.094 2.832 16.559 3.508 16.176C5.98 14.766 9.129 14.973 11.41 16.797C11.75 17.066 12.25 17.066 12.59 16.797C14.871 14.973 18.016 14.766 20.492 16.176C21.168 16.559 22 16.094 22 15.32L22 5.516C22 5.23 21.887 4.953 21.676 4.766C19.098 2.488 15.254 2.414 12.59 4.543C12.25 4.816 11.75 4.816 11.41 4.543Z","key":"0"}),
    createElement('path', {"d":"M3.504 20.176C5.984 18.766 9.129 18.973 11.41 20.793C11.75 21.07 12.25 21.07 12.59 20.793C14.871 18.973 18.02 18.766 20.496 20.176","key":"1"}),
    createElement('path', {"d":"M11.867 5.07L11.867 16.254","key":"2"})
  );
});

BookOpenWave.displayName = 'BookOpenWave';

module.exports = BookOpenWave;
module.exports.BookOpenWave = BookOpenWave;
module.exports.default = BookOpenWave;
