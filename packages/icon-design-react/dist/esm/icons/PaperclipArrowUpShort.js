import { createElement, forwardRef } from 'react';

const PaperclipArrowUpShort = forwardRef(function PaperclipArrowUpShort(
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
    createElement('path', {"d":"M13 15L19.172 8.828C20.277 7.723 20.277 5.934 19.172 4.828C18.066 3.723 16.277 3.723 15.172 4.828L6.449 13.551C4.516 15.484 4.516 18.617 6.449 20.551C8.383 22.484 11.516 22.484 13.449 20.551L21.895 12.105","key":"0"}),
    createElement('path', {"d":"M8 5L5 2L2 5","key":"1"}),
    createElement('path', {"d":"M5 9L5 2","key":"2"})
  );
});

PaperclipArrowUpShort.displayName = 'PaperclipArrowUpShort';

export default PaperclipArrowUpShort;
export { PaperclipArrowUpShort };
