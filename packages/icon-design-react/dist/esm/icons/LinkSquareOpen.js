import { createElement, forwardRef } from 'react';

const LinkSquareOpen = forwardRef(function LinkSquareOpen(
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
    createElement('path', {"d":"M22 13L22 17C22 19.762 19.762 22 17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L11 2","key":"0"}),
    createElement('path', {"d":"M19 10L20.965 8.035C22.344 6.656 22.344 4.414 20.965 3.035C19.586 1.656 17.344 1.656 15.965 3.035L14 5","key":"1"}),
    createElement('path', {"d":"M11 8L9.035 9.965C7.656 11.348 7.656 13.586 9.035 14.965C10.414 16.348 12.656 16.348 14.035 14.965L16 13","key":"2"}),
    createElement('path', {"d":"M17 7L13 11","key":"3"})
  );
});

LinkSquareOpen.displayName = 'LinkSquareOpen';

export default LinkSquareOpen;
export { LinkSquareOpen };
