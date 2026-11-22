import { createElement, forwardRef } from 'react';

const BookNoteCurved = forwardRef(function BookNoteCurved(
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
    createElement('path', {"d":"M2 18L2 5C2 3.344 3.344 2 5 2L8 2","key":"0"}),
    createElement('path', {"d":"M18 18L6 18","key":"1"}),
    createElement('path', {"d":"M9 14L6 14C3.789 14 2 15.789 2 18C2 20.211 3.789 22 6 22L18 22","key":"2"}),
    createElement('path', {"d":"M22 10.949C22 12.082 21.082 13 19.949 13","key":"3"}),
    createElement('path', {"d":"M19.789 13L13.211 13C11.988 13 11 12.012 11 10.789L11 4.211C11 2.988 11.988 2 13.211 2L19.789 2C21.012 2 22 2.988 22 4.211L22 10.789C22 12.012 21.012 13 19.789 13Z","key":"4"}),
    createElement('path', {"d":"M16 13C16 9.688 18.688 7 22 7","key":"5"})
  );
});

BookNoteCurved.displayName = 'BookNoteCurved';

export default BookNoteCurved;
export { BookNoteCurved };
