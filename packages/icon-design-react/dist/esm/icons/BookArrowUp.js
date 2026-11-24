import { createElement, forwardRef } from 'react';

const BookArrowUp = forwardRef(function BookArrowUp(
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
    createElement('path', {"d":"M19 17L7 17C5.895 17 5 17.895 5 19C5 20.105 5.895 21 7 21L19 21","key":"0"}),
    createElement('path', {"d":"M19 17L19 3L7 3C5.895 3 5 3.895 5 5","key":"1"}),
    createElement('path', {"d":"M5 5L5 19","key":"2"}),
    createElement('path', {"d":"M12 13L12 7","key":"3"}),
    createElement('path', {"d":"M15 10L12 7L9 10","key":"4"})
  );
});

BookArrowUp.displayName = 'BookArrowUp';

export default BookArrowUp;
export { BookArrowUp };
