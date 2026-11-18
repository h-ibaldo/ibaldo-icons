import { createElement, forwardRef } from 'react';

const BookOpenCurved = forwardRef(function BookOpenCurved(
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
    createElement('path', {"d":"M12 21L12 7","key":"0"}),
    createElement('path', {"d":"M12 21C10 18 5 17 2 17L2 3C5 3 10 4 12 7","key":"1"}),
    createElement('path', {"d":"M12 21C14 18 19 17 22 17L22 3C19 3 14 4 12 7","key":"2"})
  );
});

BookOpenCurved.displayName = 'BookOpenCurved';

export default BookOpenCurved;
export { BookOpenCurved };
