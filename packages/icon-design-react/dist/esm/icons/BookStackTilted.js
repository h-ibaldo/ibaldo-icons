import { createElement, forwardRef } from 'react';

const BookStackTilted = forwardRef(function BookStackTilted(
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
    createElement('path', {"d":"M3 15L2.707 14.121C2.254 12.762 2.359 11.281 3 10L11 2L22 4L14 12L3 10","key":"0"}),
    createElement('path', {"d":"M22 9L14 17L3 15","key":"1"}),
    createElement('path', {"d":"M22 14L14 22L3 20L2.707 19.121C2.254 17.762 2.359 16.281 3 15","key":"2"})
  );
});

BookStackTilted.displayName = 'BookStackTilted';

export default BookStackTilted;
export { BookStackTilted };
