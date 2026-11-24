import { createElement, forwardRef } from 'react';

const BookOpenFlat = forwardRef(function BookOpenFlat(
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
    createElement('path', {"d":"M12 7L12 21","key":"0"}),
    createElement('path', {"d":"M12 21L11.91 20.734C11.367 19.102 9.84 18 8.117 18L3 18C2.449 18 2 17.551 2 17L2 5C2 4.449 2.449 4 3 4L8.117 4C9.84 4 11.367 5.102 11.91 6.734L12 7","key":"1"}),
    createElement('path', {"d":"M12 21L12.09 20.734C12.633 19.102 14.16 18 15.883 18L21 18C21.551 18 22 17.551 22 17L22 5C22 4.449 21.551 4 21 4L15.883 4C14.16 4 12.633 5.102 12.09 6.734L12 7","key":"2"})
  );
});

BookOpenFlat.displayName = 'BookOpenFlat';

export default BookOpenFlat;
export { BookOpenFlat };
