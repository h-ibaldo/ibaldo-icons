import { createElement, forwardRef } from 'react';

const TextWholeWord = forwardRef(function TextWholeWord(
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
    createElement('path', {"d":"M2 18L2 21L22 21L22 18","key":"0"}),
    createElement('path', {"d":"M14 3L14 18","key":"1"}),
    createElement('path', {"d":"M10 13L10 16.652L11 18","key":"2"}),
    createElement('path', {"d":"M14 13C14 9.332 15.121 8 16.5 8C17.879 8 19 8.668 19 13C19 16.668 17.879 18 16.5 18C15.121 18 14 16.668 14 13Z","key":"3"}),
    createElement('path', {"d":"M5 10C5 9 6.121 8 7.5 8C8.879 8 10 8.668 10 13C10 16.668 8.879 18 7.5 18C6.121 18 5 17 5 15C5 13.895 5.895 13 7 13L10 13","key":"4"})
  );
});

TextWholeWord.displayName = 'TextWholeWord';

export default TextWholeWord;
export { TextWholeWord };
