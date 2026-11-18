import { createElement, forwardRef } from 'react';

const PaperclipSquareOpenThin = forwardRef(function PaperclipSquareOpenThin(
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
    createElement('path', {"d":"M16 10L20.379 5.621C21.207 4.793 21.207 3.449 20.379 2.621C19.551 1.793 18.207 1.793 17.379 2.621L12.035 7.965C10.656 9.344 10.656 11.586 12.035 12.965C13.414 14.344 15.656 14.344 17.035 12.965L21 9","key":"0"}),
    createElement('path', {"d":"M22 14L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L12 2","key":"1"})
  );
});

PaperclipSquareOpenThin.displayName = 'PaperclipSquareOpenThin';

export default PaperclipSquareOpenThin;
export { PaperclipSquareOpenThin };
