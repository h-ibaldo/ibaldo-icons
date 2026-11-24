import { createElement, forwardRef } from 'react';

const LinkArrowUpRound2 = forwardRef(function LinkArrowUpRound2(
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
    createElement('path', {"d":"M21 5L18 2L15 5","key":"0"}),
    createElement('path', {"d":"M18 8L18 2","key":"1"}),
    createElement('path', {"d":"M5 17.445C3.809 16.754 3 15.477 3 14C3 11.793 4.789 10 7 10L12 10C14.211 10 16 11.793 16 14C16 15.859 14.723 17.414 13 17.859","key":"2"}),
    createElement('path', {"d":"M19 14.555C20.191 15.246 21 16.523 21 18C21 20.207 19.211 22 17 22L12 22C9.789 22 8 20.207 8 18C8 16.141 9.277 14.586 11 14.141","key":"3"})
  );
});

LinkArrowUpRound2.displayName = 'LinkArrowUpRound2';

export default LinkArrowUpRound2;
export { LinkArrowUpRound2 };
