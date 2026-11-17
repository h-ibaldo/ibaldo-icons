import { createElement, forwardRef } from 'react';

const LinkImageBracket = forwardRef(function LinkImageBracket(
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
    createElement('path', {"d":"M22 19.949C22 21.082 21.082 22 19.949 22","key":"0"}),
    createElement('path', {"d":"M19.789 22L13.211 22C11.988 22 11 21.012 11 19.789L11 13.211C11 11.988 11.988 11 13.211 11L19.789 11C21.012 11 22 11.988 22 13.211L22 19.789C22 21.012 21.012 22 19.789 22Z","key":"1"}),
    createElement('path', {"d":"M16 22C16 18.688 18.688 16 22 16","key":"2"}),
    createElement('path', {"d":"M15 15L15 15","key":"3"}),
    createElement('path', {"d":"M7 12C4.238 12 2 9.762 2 7C2 4.238 4.238 2 7 2L9 2","key":"4"}),
    createElement('path', {"d":"M15 2L17 2C19.762 2 22 4.238 22 7","key":"5"}),
    createElement('path', {"d":"M8 7L16 7","key":"6"})
  );
});

LinkImageBracket.displayName = 'LinkImageBracket';

export default LinkImageBracket;
export { LinkImageBracket };
