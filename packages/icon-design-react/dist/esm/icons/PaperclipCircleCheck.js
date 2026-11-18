import { createElement, forwardRef } from 'react';

const PaperclipCircleCheck = forwardRef(function PaperclipCircleCheck(
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
    createElement('path', {"d":"M21.797 14C21.93 13.355 22 12.684 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C12.684 22 13.355 21.93 14 21.801","key":"0"}),
    createElement('path', {"d":"M17 19L19 21L22 18","key":"1"}),
    createElement('path', {"d":"M13.75 10.25L12.246 11.754C11.695 12.305 11.695 13.195 12.246 13.746L12.254 13.754C12.805 14.305 13.695 14.305 14.246 13.754L16.75 11.25C17.855 10.145 17.855 8.355 16.75 7.25C15.645 6.145 13.855 6.145 12.75 7.25L7.25 12.75C6.145 13.855 6.145 15.645 7.25 16.75C8.355 17.855 10.145 17.855 11.25 16.75","key":"2"})
  );
});

PaperclipCircleCheck.displayName = 'PaperclipCircleCheck';

export default PaperclipCircleCheck;
export { PaperclipCircleCheck };
