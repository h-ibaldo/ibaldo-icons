import { createElement, forwardRef } from 'react';

const PaperclipSquareOpen = forwardRef(function PaperclipSquareOpen(
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
    createElement('path', {"d":"M18.172 5.828L16 8C15.449 8.551 15.449 9.445 16 9.996L16.004 10C16.555 10.551 17.449 10.551 18 10L21.172 6.828C22.277 5.723 22.277 3.934 21.172 2.828C20.066 1.723 18.277 1.723 17.172 2.828L10.828 9C9.723 10.105 9.723 11.895 10.828 13C11.934 14.105 13.723 14.105 14.828 13","key":"0"}),
    createElement('path', {"d":"M22 12L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L12 2","key":"1"})
  );
});

PaperclipSquareOpen.displayName = 'PaperclipSquareOpen';

export default PaperclipSquareOpen;
export { PaperclipSquareOpen };
