import { createElement, forwardRef } from 'react';

const BookshelfDouble = forwardRef(function BookshelfDouble(
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
    createElement('path', {"d":"M4 2L4 22","key":"0"}),
    createElement('path', {"d":"M20 2L20 22","key":"1"}),
    createElement('path', {"d":"M4 4L20 4","key":"2"}),
    createElement('path', {"d":"M4 12L20 12","key":"3"}),
    createElement('path', {"d":"M4 20L20 20","key":"4"}),
    createElement('path', {"d":"M8 7L8 12","key":"5"}),
    createElement('path', {"d":"M12 7L12 12","key":"6"}),
    createElement('path', {"d":"M8 15L8 20","key":"7"}),
    createElement('path', {"d":"M12 15L12 20","key":"8"}),
    createElement('path', {"d":"M16 15L16 20","key":"9"}),
    createElement('path', {"d":"M15 7L17 12","key":"10"})
  );
});

BookshelfDouble.displayName = 'BookshelfDouble';

export default BookshelfDouble;
export { BookshelfDouble };
