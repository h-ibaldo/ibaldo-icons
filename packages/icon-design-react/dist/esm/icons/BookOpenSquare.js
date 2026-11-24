import { createElement, forwardRef } from 'react';

const BookOpenSquare = forwardRef(function BookOpenSquare(
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
    createElement('path', {"d":"M12 9L12 18","key":"1"}),
    createElement('path', {"d":"M12 9C11.387 7.773 10.133 7 8.766 7L6 7L6 16L8.766 16C10.133 16 11.387 16.773 12 18","key":"2"}),
    createElement('path', {"d":"M12 9C12.613 7.773 13.867 7 15.234 7L18 7L18 16L15.234 16C13.867 16 12.613 16.773 12 18","key":"3"})
  );
});

BookOpenSquare.displayName = 'BookOpenSquare';

export default BookOpenSquare;
export { BookOpenSquare };
