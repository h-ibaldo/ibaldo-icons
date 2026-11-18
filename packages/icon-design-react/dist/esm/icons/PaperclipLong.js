import { createElement, forwardRef } from 'react';

const PaperclipLong = forwardRef(function PaperclipLong(
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
    createElement('path', {"d":"M14 8L5.828 17.172C4.723 18.277 4.723 20.066 5.828 21.172C6.934 22.277 8.723 22.277 9.828 21.172L19.551 10.449C21.484 8.516 21.484 5.383 19.551 3.449C17.617 1.516 14.484 1.516 12.551 3.449L4 13","key":"0"})
  );
});

PaperclipLong.displayName = 'PaperclipLong';

export default PaperclipLong;
export { PaperclipLong };
