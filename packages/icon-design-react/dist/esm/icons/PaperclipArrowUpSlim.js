import { createElement, forwardRef } from 'react';

const PaperclipArrowUpSlim = forwardRef(function PaperclipArrowUpSlim(
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
    createElement('path', {"d":"M13 10L13 17C13 19.762 10.762 22 8 22C5.238 22 3 19.762 3 17L3 5.5C3 3.566 4.566 2 6.5 2C8.434 2 10 3.566 10 5.5L10 15C10 16.105 9.105 17 8 17C6.895 17 6 16.105 6 15L6 10","key":"0"}),
    createElement('path', {"d":"M21 5L18 2L15 5","key":"1"}),
    createElement('path', {"d":"M18 11L18 2","key":"2"})
  );
});

PaperclipArrowUpSlim.displayName = 'PaperclipArrowUpSlim';

export default PaperclipArrowUpSlim;
export { PaperclipArrowUpSlim };
