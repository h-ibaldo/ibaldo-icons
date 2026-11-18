'use strict';

const { createElement, forwardRef } = require('react');

const BookOpenCoverCircle = forwardRef(function BookOpenCoverCircle(
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
    createElement('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement('path', {"d":"M6 9C7.656 7.668 10.344 7.668 12 9","key":"1"}),
    createElement('path', {"d":"M12 9C13.656 7.668 16.344 7.668 18 9","key":"2"}),
    createElement('path', {"d":"M6 16C7.656 14.668 10.344 14.668 12 16","key":"3"}),
    createElement('path', {"d":"M12 16C13.656 14.668 16.344 14.668 18 16","key":"4"}),
    createElement('path', {"d":"M12 9L12 16","key":"5"}),
    createElement('path', {"d":"M6 9L6 16","key":"6"}),
    createElement('path', {"d":"M18 9L18 16","key":"7"})
  );
});

BookOpenCoverCircle.displayName = 'BookOpenCoverCircle';

module.exports = BookOpenCoverCircle;
module.exports.BookOpenCoverCircle = BookOpenCoverCircle;
module.exports.default = BookOpenCoverCircle;
