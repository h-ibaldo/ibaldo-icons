import { createElement, forwardRef } from 'react';

const BookSearchCurved = forwardRef(function BookSearchCurved(
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
    createElement('path', {"d":"M4 18L4 5C4 3.344 5.344 2 7 2L11 2","key":"0"}),
    createElement('path', {"d":"M20 13L20 14","key":"1"}),
    createElement('path', {"d":"M20 18L8 18","key":"2"}),
    createElement('path', {"d":"M20 14L8 14C5.789 14 4 15.789 4 18C4 20.211 5.789 22 8 22L20 22","key":"3"}),
    createElement('path', {"d":"M20 5.5C20 7.434 18.434 9 16.5 9C14.566 9 13 7.434 13 5.5C13 3.566 14.566 2 16.5 2C18.434 2 20 3.566 20 5.5Z","key":"4"}),
    createElement('path', {"d":"M18.973 7.973L21 10","key":"5"})
  );
});

BookSearchCurved.displayName = 'BookSearchCurved';

export default BookSearchCurved;
export { BookSearchCurved };
