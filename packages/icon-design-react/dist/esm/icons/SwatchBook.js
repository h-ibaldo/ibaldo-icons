import { createElement, forwardRef } from 'react';

const SwatchBook = forwardRef(function SwatchBook(
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
    createElement('path', {"d":"M4 2L8 2C9.105 2 10 2.895 10 4L10 20C10 21.105 9.105 22 8 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2Z","key":"0"}),
    createElement('path', {"d":"M10 8L14.586 3.414C15.367 2.633 16.633 2.633 17.414 3.414L20.586 6.586C21.367 7.367 21.367 8.633 20.586 9.414L10 20","key":"1"}),
    createElement('path', {"d":"M16 14L20 14C21.105 14 22 14.895 22 16L22 20C22 21.105 21.105 22 20 22L8 22","key":"2"}),
    createElement('path', {"d":"M6 18L6 18","key":"3"})
  );
});

SwatchBook.displayName = 'SwatchBook';

export default SwatchBook;
export { SwatchBook };
