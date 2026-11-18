import { createElement, forwardRef } from 'react';

const LinkArrowUpClip = forwardRef(function LinkArrowUpClip(
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
    createElement('path', {"d":"M16 16L8 8","key":"0"}),
    createElement('path', {"d":"M13 6L10.5 3.5C8.566 1.566 5.434 1.566 3.5 3.5C1.566 5.434 1.566 8.566 3.5 10.5L6 13","key":"1"}),
    createElement('path', {"d":"M11 18L13.5 20.5C15.434 22.434 18.566 22.434 20.5 20.5C22.434 18.566 22.434 15.434 20.5 13.5L18 11","key":"2"}),
    createElement('path', {"d":"M22.004 4L20.004 2L18.004 4","key":"3"}),
    createElement('path', {"d":"M20.004 7L20.004 2","key":"4"})
  );
});

LinkArrowUpClip.displayName = 'LinkArrowUpClip';

export default LinkArrowUpClip;
export { LinkArrowUpClip };
