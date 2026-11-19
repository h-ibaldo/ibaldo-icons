import { createElement, forwardRef } from 'react';

const BookOpenRound = forwardRef(function BookOpenRound(
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
    createElement('path', {"d":"M11.41 5.543C8.746 3.414 4.902 3.488 2.324 5.766C2.113 5.953 2 6.23 2 6.516L2 19.066C2 19.844 2.832 20.305 3.508 19.922C5.98 18.512 9.129 18.719 11.41 20.543C11.75 20.816 12.25 20.816 12.59 20.543C14.871 18.719 18.016 18.512 20.492 19.922C21.168 20.305 22 19.844 22 19.066L22 6.516C22 6.23 21.887 5.953 21.676 5.766C19.098 3.488 15.254 3.414 12.59 5.543C12.25 5.816 11.75 5.816 11.41 5.543Z","key":"0"}),
    createElement('path', {"d":"M12 6.07L12 20","key":"1"})
  );
});

BookOpenRound.displayName = 'BookOpenRound';

export default BookOpenRound;
export { BookOpenRound };
