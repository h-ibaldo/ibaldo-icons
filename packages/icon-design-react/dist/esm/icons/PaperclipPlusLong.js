import { createElement, forwardRef } from 'react';

const PaperclipPlusLong = forwardRef(function PaperclipPlusLong(
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
    createElement('path', {"d":"M15 10L8.828 17.172C7.723 18.277 7.723 20.066 8.828 21.172C9.934 22.277 11.723 22.277 12.828 21.172L20.551 12.449C22.484 10.516 22.484 7.383 20.551 5.449C18.617 3.516 15.484 3.516 13.551 5.449L7 13","key":"0"}),
    createElement('path', {"d":"M2 5L8 5","key":"1"}),
    createElement('path', {"d":"M5 2L5 8","key":"2"})
  );
});

PaperclipPlusLong.displayName = 'PaperclipPlusLong';

export default PaperclipPlusLong;
export { PaperclipPlusLong };
