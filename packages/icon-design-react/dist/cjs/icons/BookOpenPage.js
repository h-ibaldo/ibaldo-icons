'use strict';

const { createElement, forwardRef } = require('react');

const BookOpenPage = forwardRef(function BookOpenPage(
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
    createElement('path', {"d":"M12 9C12 5 15 2 18 2L18 15C15 15 12 17 12 22L12 9","key":"0"}),
    createElement('path', {"d":"M12 22C10 19 5 18 2 18L2 5C5 5 10 6 12 9","key":"1"}),
    createElement('path', {"d":"M12 22C14 19 19 18 22 18L22 5C20.863 5 19.438 5.145 18 5.484","key":"2"})
  );
});

BookOpenPage.displayName = 'BookOpenPage';

module.exports = BookOpenPage;
module.exports.BookOpenPage = BookOpenPage;
module.exports.default = BookOpenPage;
