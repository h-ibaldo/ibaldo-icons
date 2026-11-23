import { createElement, forwardRef } from 'react';

const BookNote = forwardRef(function BookNote(
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
    createElement('path', {"d":"M18 17L6 17C4.895 17 4 17.895 4 19C4 20.105 4.895 21 6 21L18 21","key":"0"}),
    createElement('path', {"d":"M18 17L18 13","key":"1"}),
    createElement('path', {"d":"M10 3L6 3C4.895 3 4 3.895 4 5","key":"2"}),
    createElement('path', {"d":"M4 5L4 19","key":"3"}),
    createElement('path', {"d":"M21 10.949C21 12.082 20.082 13 18.949 13","key":"4"}),
    createElement('path', {"d":"M18.789 13L12.211 13C10.988 13 10 12.012 10 10.789L10 4.211C10 2.988 10.988 2 12.211 2L18.789 2C20.012 2 21 2.988 21 4.211L21 10.789C21 12.012 20.012 13 18.789 13Z","key":"5"}),
    createElement('path', {"d":"M15 13C15 9.688 17.688 7 21 7","key":"6"}),
    createElement('path', {"d":"M14 6L14 6","key":"7"})
  );
});

BookNote.displayName = 'BookNote';

export default BookNote;
export { BookNote };
