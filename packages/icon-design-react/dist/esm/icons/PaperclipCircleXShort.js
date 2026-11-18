import { createElement, forwardRef } from 'react';

const PaperclipCircleXShort = forwardRef(function PaperclipCircleXShort(
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
    createElement('path', {"d":"M22 22L18 18","key":"0"}),
    createElement('path', {"d":"M22 18L18 22","key":"1"}),
    createElement('path', {"d":"M21.801 14C21.93 13.355 22 12.684 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C12.684 22 13.352 21.93 14 21.801","key":"2"}),
    createElement('path', {"d":"M11.5 13.5L15.379 9.621C16.207 8.793 16.207 7.449 15.379 6.621C14.551 5.793 13.207 5.793 12.379 6.621L7.676 11.324C6.293 12.707 6.293 14.945 7.676 16.324C9.055 17.707 11.293 17.707 12.676 16.324L16 13","key":"3"})
  );
});

PaperclipCircleXShort.displayName = 'PaperclipCircleXShort';

export default PaperclipCircleXShort;
export { PaperclipCircleXShort };
