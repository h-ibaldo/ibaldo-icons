import { createElement, forwardRef } from 'react';

const TextAdsMobile = forwardRef(function TextAdsMobile(
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
    createElement('path', {"d":"M15 18L15 20C15 21.105 14.105 22 13 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L13 2C14.105 2 15 2.895 15 4","key":"0"}),
    createElement('path', {"d":"M6 14L8 8L10 14","key":"1"}),
    createElement('path', {"d":"M14 8L13 8L13 14L14 14C15.105 14 16 13.105 16 12L16 10C16 8.895 15.105 8 14 8Z","key":"2"}),
    createElement('path', {"d":"M19 13.5C19 13.5 19.449 14 20.5 14C21.328 14 22 13.328 22 12.5C22 11.672 21.207 11.215 20.5 11C19.707 10.762 19 10.328 19 9.5C19 8.672 19.672 8 20.5 8C21.551 8 22 8.5 22 8.5","key":"3"}),
    createElement('path', {"d":"M7 13L9 13","key":"4"}),
    createElement('path', {"d":"M8 19L9 19","key":"5"})
  );
});

TextAdsMobile.displayName = 'TextAdsMobile';

export default TextAdsMobile;
export { TextAdsMobile };
