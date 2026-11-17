'use strict';

const { createElement, forwardRef } = require('react');

const BookOpenSquareCurved = forwardRef(function BookOpenSquareCurved(
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
    createElement('path', {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z","key":"0"}),
    createElement('path', {"d":"M6 8C7.656 6.668 10.344 6.668 12 8","key":"1"}),
    createElement('path', {"d":"M12 8C13.656 6.668 16.344 6.668 18 8","key":"2"}),
    createElement('path', {"d":"M6 17C7.656 15.668 10.344 15.668 12 17","key":"3"}),
    createElement('path', {"d":"M12 17C13.656 15.668 16.344 15.668 18 17","key":"4"}),
    createElement('path', {"d":"M12 8L12 17","key":"5"}),
    createElement('path', {"d":"M6 8L6 17","key":"6"}),
    createElement('path', {"d":"M18 8L18 17","key":"7"})
  );
});

BookOpenSquareCurved.displayName = 'BookOpenSquareCurved';

module.exports = BookOpenSquareCurved;
module.exports.BookOpenSquareCurved = BookOpenSquareCurved;
module.exports.default = BookOpenSquareCurved;
