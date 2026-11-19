import { createElement, forwardRef } from 'react';

const BookBookmarkRibbonCurved = forwardRef(function BookBookmarkRibbonCurved(
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
    createElement('path', {"d":"M19 14L19 19","key":"0"}),
    createElement('path', {"d":"M16 19L20 19","key":"1"}),
    createElement('path', {"d":"M4 16.5L4 4.5C4 3.117 5.117 2 6.5 2L19 2C19.551 2 20 2.449 20 3L20 13C20 13.551 19.551 14 19 14L6.5 14C5.117 14 4 15.117 4 16.5C4 17.883 5.117 19 6.5 19L10 19","key":"2"}),
    createElement('path', {"d":"M9 2L9 14","key":"3"}),
    createElement('path', {"d":"M10 17L10 22L13 21L16 22L16 17Z","key":"4"})
  );
});

BookBookmarkRibbonCurved.displayName = 'BookBookmarkRibbonCurved';

export default BookBookmarkRibbonCurved;
export { BookBookmarkRibbonCurved };
