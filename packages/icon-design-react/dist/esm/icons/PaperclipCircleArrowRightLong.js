import { createElement, forwardRef } from 'react';

const PaperclipCircleArrowRightLong = forwardRef(function PaperclipCircleArrowRightLong(
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
    createElement('path', {"d":"M6 6L8 4L6 2","key":"0"}),
    createElement('path', {"d":"M2 4L8 4","key":"1"}),
    createElement('path', {"d":"M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 10.953 2.16 9.945 2.461 9","key":"2"}),
    createElement('path', {"d":"M16 12L12 16C10.895 17.105 9.105 17.105 8 16C6.895 14.895 6.895 13.105 8 12L13 7C13.555 6.449 14.445 6.449 15 7C15.555 7.551 15.555 8.449 15 9L11 13","key":"3"})
  );
});

PaperclipCircleArrowRightLong.displayName = 'PaperclipCircleArrowRightLong';

export default PaperclipCircleArrowRightLong;
export { PaperclipCircleArrowRightLong };
